import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApolloService} from '../../services/apollo.service';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {CartService} from '../../services/cart.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute,
              private gameService: ApolloService,
              private userService: UserService,
              private postService: PostService,
              private cartService: CartService
  ) {
  }

  gameId;
  game;
  post;
  userAuth;
  review;
  help;
  isHaveGame = false;

  ngOnInit(): void {
    this.userAuth = UserService.userAuth;
    this.gameId = this.actRoute.snapshot.paramMap.get('gameId');
    console.log(this.gameId);
    this.userAuth.games.forEach(x => {
      if (x.ID == this.gameId) {
        this.isHaveGame = true;
      }
    });
    console.log(this.isHaveGame);
    // this.checkIsUserOwn();
    this.gameService.getGameById(this.gameId).subscribe(async data => {
      this.game = data.data.getGameById;
      console.log(this.game);
    });

    this.postService.getReviewByGameRecent(this.gameId).subscribe(async data => {
      this.post = data.data.getReviewByGameRecent;
    });
  }

  checkIsUserOwn(): void {
    this.userAuth.game.foreach(x => {
      // if(x.gameId)
      console.log(x);
    });
  }

  onRecent(): void {
    this.postService.getReviewByGameRecent(this.gameId).subscribe(async data => {
      this.post = data.data.getReviewByGameRecent;
    });
  }

  onUpvoted(): void {
    this.postService.getReviewByGameUpvoted(this.gameId).subscribe(async data => {
      this.post = data.data.getReviewByGameUpvoted;
    });
  }

  onWishList(): void {
    this.userService.addGameToWishlist(this.gameId).subscribe(async data => {
      console.log('sukses');
    });
  }

  onCart(): void {
    // console.log(this.userAuth.userID);
    this.cartService.insertCart(this.userAuth.userID, this.gameId).subscribe(data => {
      console.log('sukses insert the cart');
    });
  }

  onReview(): void {
    console.log(this.help);
    this.postService.insertReview(this.review, this.help, this.gameId).subscribe(async data => {
      console.log('sukses');
    });
  }
}
