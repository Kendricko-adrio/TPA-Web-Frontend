import {Component, OnInit} from '@angular/core';
import {PromoService} from '../../services/promo.service';
import {ApolloService} from '../../services/apollo.service';
import {Promo} from '../../models/promo';

@Component({
  selector: 'app-insert-promo',
  templateUrl: './insert-promo.component.html',
  styleUrls: ['./insert-promo.component.scss']
})
export class InsertPromoComponent implements OnInit {

  constructor(
    private promoService: PromoService,
    private gameService: ApolloService
  ) {
  }

  game;
  promo: Promo;

  ngOnInit(): void {
    this.promo = new Promo();
    this.gameService.getGames().subscribe(async data => {
      console.log(data);
      this.game = data.data.allGame;
    });
  }

  tester(): void {
    console.log(this.promo.gameId);
  }

  onSubmit(): void {
    this.promo.gameId = Number(this.promo.gameId);
    this.promo.promoDiscount = Number(this.promo.promoDiscount);
    this.promo.promoDuration = Number(this.promo.promoDuration);
    // console.log(this.promo);
    this.promoService.insertPromo(this.promo).subscribe(async data => {
      console.log(data);
    });
  }

}
