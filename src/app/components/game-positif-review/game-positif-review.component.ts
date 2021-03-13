import { Component, OnInit } from '@angular/core';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-game-positif-review',
  templateUrl: './game-positif-review.component.html',
  styleUrls: ['./game-positif-review.component.scss']
})
export class GamePositifReviewComponent implements OnInit {

  constructor(
    private gameService: ApolloService
  ) { }
  games;
  ngOnInit(): void {
    this.gameService.getMostPositifReview().subscribe(async data => {
      this.games = data.data.getMostPositifReview;
    });
  }

}
