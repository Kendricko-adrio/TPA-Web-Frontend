import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {ManageGameComponent} from '../../pages/manage-game/manage-game.component';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor() {
  }

  @Input() game;
  @Input() gameCurr;

  ngOnInit(): void {
    // console.log(this.game);
  }

  update(): void {
    this.gameCurr = this.game;

  }
}
