import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  user;
  ngOnInit(): void {
    this.user = UserService.userAuth;
  }

  onDelete(gameId): any{
    this.userService.deleteWishlist(gameId).subscribe(async data => {
      console.log(data);
    });
  }
}
