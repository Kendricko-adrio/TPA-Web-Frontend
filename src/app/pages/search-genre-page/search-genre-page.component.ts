import { Component, OnInit } from '@angular/core';
import {ApolloService} from '../../services/apollo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-genre-page',
  templateUrl: './search-genre-page.component.html',
  styleUrls: ['./search-genre-page.component.scss']
})
export class SearchGenrePageComponent implements OnInit {

  constructor(
    private gameService: ApolloService,
    private actRoute: ActivatedRoute
  ) { }

  games;
  genre;
  ngOnInit(): void {
    this.genre = this.actRoute.snapshot.paramMap.get('search');
    this.gameService.getFilterGame(10000000, this.genre, '').subscribe(async data => {
      this.games = data.data.getFilterGame;
    });
  }

}
