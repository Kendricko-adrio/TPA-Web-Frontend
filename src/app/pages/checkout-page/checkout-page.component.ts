import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {CartService} from '../../services/cart.service';
import {TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private transactionService: TransactionService
  ) {
  }

  user;
  cart;
  totalPrice = 0;
  paymentTypes;
  isEnough;
  paymentType;
  recepient;
  gameId = [];
  isFriend = false;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.recepient = UserService.userAuth;
    this.cartService.getUserCart().subscribe(async data => {
      this.cart = data.data.getUserCart;
      console.log(this.cart);
      for (let i = 0; i < this.cart.length; i++) {
        const price = this.cart[i];
        console.log(price.game.Price);
        this.totalPrice = this.totalPrice + price.game.Price;
        this.gameId.push(this.cart[i].game.ID);
      }
      console.log(this.gameId);
      if (this.totalPrice > this.user.money){
        this.isEnough = false;
        this.paymentType = 2;
      }else{
        this.isEnough = true;
      }
    });

    this.transactionService.getAllPaymentType().subscribe(async data => {
      this.paymentTypes = data.data.getAllPaymentType;
      console.log(this.paymentTypes);
    });
  }

  onPurchase(): void{
    this.transactionService.insertTransaction(this.user.userID, this.recepient.userID, this.totalPrice, this.paymentType, this.gameId).subscribe(async data => {
      console.log('sukses');
    });
  }
  onChangeFriends(res): void{
    this.recepient = res;
  }

}
