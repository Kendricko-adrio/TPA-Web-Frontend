import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent implements OnInit {

  constructor(
    private itemService: ItemService
  ) { }
  items;
  currPage = 1;
  ngOnInit(): void {
    this.itemService.getRequestTransaction(1).subscribe(async data => {
      this.items = data.data.getRequestTransaction;
    });
  }

  onNext(): void{
    this.currPage += 1;
    this.itemService.getRequestTransaction(this.currPage).subscribe(async data => {
      this.items = data.data.getRequestTransaction;
    });
  }
  onPrev(): void{
    this.currPage -= 1;
    this.itemService.getRequestTransaction(this.currPage).subscribe(async data => {
      this.items = data.data.getRequestTransaction;
    });
  }

}
