import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-sale-card',
  templateUrl: './on-sale-card.component.html',
  styleUrls: ['./on-sale-card.component.scss']
})
export class OnSaleCardComponent implements OnInit {

  constructor() { }
  @Input() game;
  @Input() discount;
  ngOnInit(): void {
  }

}
