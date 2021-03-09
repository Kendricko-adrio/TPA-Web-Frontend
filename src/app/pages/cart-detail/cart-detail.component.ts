import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  constructor(
    private userService: UserService,
    private cartService: CartService,
  ) {
  }

  user;
  cart;
  totalPrice = 0;

  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.cartService.getUserCart().subscribe(async data => {
      this.cart = data.data.getUserCart;
      console.log(this.cart);
      for (let i = 0; i < this.cart.length; i++) {
        const price = this.cart[i];
        console.log(price.game.Price);
        this.totalPrice = this.totalPrice + price.game.Price;
      }
    });


  }

  onDelete(gameId): any {
    const conf = confirm('Are you sure want to delete');
    console.log(conf);
    if (conf === true) {
      this.cartService.deleteCart(gameId).subscribe(async data => {
        console.log('benar');
      });
    }
  }

}
