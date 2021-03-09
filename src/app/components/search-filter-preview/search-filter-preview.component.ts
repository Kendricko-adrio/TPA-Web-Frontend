import {Component, HostListener, Input, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-search-filter-preview',
  templateUrl: './search-filter-preview.component.html',
  styleUrls: ['./search-filter-preview.component.scss']
})
export class SearchFilterPreviewComponent implements OnInit {

  constructor(
    private gameService: ApolloService,
  ) {
  }

  @Input() searchKey: string;
  isFetching = false;
  page = 1;
  games;
  totalGames: number;
  price = 500000;
  genres;
  genre = 0;
  onRange(event): void {
    console.log(event.target.value);
    this.price = event.target.value;
    this.gameService.getFilterGame(this.price, this.genre, this.searchKey).subscribe(async data =>{
      this.games = data.data.getFilterGame;
    });
  }

  onSelect(event): void{
    console.log(event.target.value);
    this.genre = event.target.value;
    this.gameService.getFilterGame(this.price, this.genre, this.searchKey).subscribe(async data =>{
      this.games = data.data.getFilterGame;
    });
  }

  @HostListener('window:scroll', ['$event'])
  infinite(event): void {
    const currHeight = window.pageYOffset;
    const clientHeight = document.body.offsetHeight;
    // const clientHeight = event.target.scrollingElement.clientHeight;
    if (currHeight > clientHeight * 0.5 && !this.isFetching) {
      if (this.games.length >= this.totalGames) {
        return;
      }
      this.fetchInfiniteScroll();
      console.log('game length', this.games.length);
      console.log(currHeight);
      console.log(clientHeight);
    }
  }

  fetchInfiniteScroll(): void {
    this.isFetching = true;
    this.gameService.searchGameInfinite(this.searchKey, this.page).subscribe(async data => {
      this.games = await data.data.searchGameInfinite;
      // console.log(this.formatDate(this.games[0].CreatedAt));
      this.isFetching = false;
    });
  }

  ngOnInit(): void {
    this.gameService.searchGameInfinite(this.searchKey, this.page).subscribe(async data => {
      this.games = await data.data.searchGameInfinite;
      console.log(this.games);
      this.page = this.page + 1;
    });

    this.gameService.getTotalGames().subscribe(async data => {
      this.totalGames = data.data.getTotalGame;
    });
    this.gameService.getALlGenre().subscribe(async data =>{
      this.genres = data.data.getAllGenre;
    });
  }

}
