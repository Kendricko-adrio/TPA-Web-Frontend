import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-top-sale-card',
  templateUrl: './on-top-sale-card.component.html',
  styleUrls: ['./on-top-sale-card.component.scss']
})
export class OnTopSaleCardComponent implements OnInit {

  constructor() { }

  @Input() game?;

  ngOnInit(): void {
  }

}
