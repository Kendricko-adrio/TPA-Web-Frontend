import {Component, OnInit} from '@angular/core';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-new-trending-games',
  templateUrl: './new-trending-games.component.html',
  styleUrls: ['./new-trending-games.component.scss']
})
export class NewTrendingGamesComponent implements OnInit {

  constructor(
    private gameService: ApolloService,
  ) {
  }

  games;
  hovered;
  ngOnInit(): void {
    this.gameService.newGame().subscribe(async data => {
      this.games = data.data.getNewGame;
    });
  }

  onHover(elementId): void {
    console.log(elementId);
  }

}
