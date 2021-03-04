import { Component, OnInit } from '@angular/core';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-game-on-sale',
  templateUrl: './game-on-sale.component.html',
  styleUrls: ['./game-on-sale.component.scss']
})
export class GameOnSaleComponent implements OnInit {

  constructor(
    private gameService: ApolloService
  ) { }
  promos;
  ngOnInit(): void {
    this.gameService.getOnSale().subscribe(data => {
      this.promos = data.data.getOnSale;
      console.log(this.promos);
    });
  }

}
