import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';
import {ManageGameComponent} from '../../pages/manage-game/manage-game.component';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor(
    private gameService: ApolloService
  ) {
  }

  @Input() game;
  @Input() gameCurr;

  ngOnInit(): void {
    // console.log(this.game);
  }

  update(): void {
    this.gameCurr = this.game;
  }

  onDelete(id): void{
    const test = confirm('apakah kamu mau mendelete?');
    if (test === false){
      return;
    }
    console.log(id);
    this.gameService.deleteGame(id).subscribe(data => {
      console.log('sukses mendelete ', id);
    });
  }

}
