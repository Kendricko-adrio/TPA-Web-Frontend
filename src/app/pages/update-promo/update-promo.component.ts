import { Component, OnInit } from '@angular/core';
import {PromoService} from '../../services/promo.service';
import {ApolloService} from '../../services/apollo.service';
import {Promo} from '../../models/promo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-promo',
  templateUrl: './update-promo.component.html',
  styleUrls: ['./update-promo.component.scss']
})
export class UpdatePromoComponent implements OnInit {

  constructor(
    private promoService: PromoService,
    private gameService: ApolloService,
    private route: ActivatedRoute
  ) {
  }

  game;
  promo: Promo;
  promoId: number;
  ngOnInit(): void {
    this.promo = new Promo();
    this.gameService.getGames().subscribe(async data => {
      console.log(data);
      this.game = data.data.allGame;
    });
    const idPromo = this.route.snapshot.paramMap.get('promoId');
    this.promoService.getPromoById(idPromo).subscribe(async data => {
      const temp = data.data.getPromoById;
      this.promoId = temp.promoId;
      this.promo.promoDuration = temp.promoDuration;
      this.promo.promoDiscount = temp.promoDiscount;
      this.promo.gameId = temp.gameId;
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
    this.promoService.updatePromo(this.promo, this.promoId).subscribe(async data => {
      console.log(data);
    });
  }

}
