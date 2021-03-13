import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-game-top-sale',
  templateUrl: './game-top-sale.component.html',
  styleUrls: ['./game-top-sale.component.scss']
})
export class GameTopSaleComponent implements OnInit {

  constructor(
    private gameService: ApolloService
  ) { }

  game;
  ngOnInit(): void {
    this.gameService.getTopSeller().subscribe(async data => {
      this.game = data.data.getTopSeller;
      console.log(this.game);
    });
  }

}
