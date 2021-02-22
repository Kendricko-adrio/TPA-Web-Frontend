import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.scss']
})
export class ManageGameComponent implements OnInit {

  constructor(private gameService: ApolloService) {
  }
  gameCurr: any;
  games;
  pages = [];
  count;
  ngOnInit(): void {
    // this.gameCurr.Name = 'test';
    this.gameService.getGames().subscribe(async data => {
      console.log(data.data.allGame.length);
      this.count = data.data.allGame.length;
      this.count = (this.count / 10);
      for (let i = 0; i < this.count; i++) {
        this.pages.push(i + 1);
      }
      console.log(this.pages);
    });
    this.gameService.getGamePaginate(1).subscribe(async data => {
      console.log(data);
      this.games = data.data.getAllGamesPaginated;
    });
  }

  test(): void{
    console.log(this.gameCurr);
  }
}
