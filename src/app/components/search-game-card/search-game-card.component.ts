import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-game-card',
  templateUrl: './search-game-card.component.html',
  styleUrls: ['./search-game-card.component.scss']
})
export class SearchGameCardComponent implements OnInit {

  constructor() { }

  @Input() game: any;
  ngOnInit(): void {
  }

}
