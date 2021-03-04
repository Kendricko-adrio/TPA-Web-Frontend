import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApolloService} from '../../services/apollo.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute,
              private gameService: ApolloService,
              private userService: UserService) {
  }

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

  onWishList(): void {
    this.userService.addGameToWishlist(this.gameId).subscribe(async data => {
      console.log('sukses');
    });
  }
}
