import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-positif-review-card',
  templateUrl: './on-positif-review-card.component.html',
  styleUrls: ['./on-positif-review-card.component.scss']
})
export class OnPositifReviewCardComponent implements OnInit {

  constructor() { }

  @Input()game;

  ngOnInit(): void {
  }

}
