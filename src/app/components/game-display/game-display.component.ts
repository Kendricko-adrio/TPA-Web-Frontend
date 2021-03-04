import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private gameService: ApolloService
  ) { }

  gameId;
  game;
  ngOnInit(): void {
    this.gameId = this.actRoute.snapshot.paramMap.get('gameId');
    console.log(this.gameId);
    this.gameService.getGameById(this.gameId).subscribe(async data => {
      this.game = data.data.getGameById;
      console.log(this.game);
    });
  }

}
