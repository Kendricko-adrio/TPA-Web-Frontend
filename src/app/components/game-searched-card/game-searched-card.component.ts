import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-searched-card',
  templateUrl: './game-searched-card.component.html',
  styleUrls: ['./game-searched-card.component.scss']
})
export class GameSearchedCardComponent implements OnInit {

  constructor() { }

  @Input() game;
  ngOnInit(): void {
  }

  formatDate(date): string {
    // tslint:disable-next-line:prefer-const
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      // tslint:disable-next-line:prefer-const
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
