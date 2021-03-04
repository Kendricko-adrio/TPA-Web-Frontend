import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.scss']
})
export class TrendingCardComponent implements OnInit {

  constructor() { }

  @Input() game;
  ngOnInit(): void {

  }

}
