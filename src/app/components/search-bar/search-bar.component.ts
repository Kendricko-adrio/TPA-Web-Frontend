import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private gameService: ApolloService,
  ) {
  }

  @ViewChild('search', {static: true}) search: ElementRef;
  searched: any;
  text: string;

  ngOnInit(): void {

    fromEvent(this.search.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
        this.text = text;
        if (this.text === '') {
          this.searched = null;
        } else {
          this.gameService.searchGameByTitle(text).subscribe(async data => {
            console.log(data.data.searchGameByTitle);
            this.searched = data.data.searchGameByTitle;
          });
        }
      }
    );
  }

}
