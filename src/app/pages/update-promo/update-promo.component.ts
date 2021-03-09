import {Component, OnInit} from '@angular/core';
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

  game = [];
  promo: Promo;
  promoDuration;
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
      this.promoDuration = this.unixToDate(temp.promoDuration);
      console.log(this.promoDuration);
      console.log(this.promoDuration);
      this.promo.gameId = temp.gameId;
    });
  }

  unixToDate(unix): string {
    const unixtimestamp = unix;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unixtimestamp * 1000);
    console.log(date);
// Hours part from the timestamp
    const hours = date.getFullYear();
// Minutes part from the timestamp
    const minutes = (date.getMonth().toString().length > 1) ? date.getMonth() : '0' + date.getMonth();
// Seconds part from the timestamp
    const seconds = (date.getDate().toString().length > 1) ? date.getDate() : '0' + date.getDate();

    const formattedTime = hours + '-' + minutes + '-' + seconds;
    return formattedTime;
  }

  tester(): void {
    console.log(this.promo.gameId);
  }
  toUnixTS(date): number{
    return new Date(date).getTime() / 1000;
  }

  onSubmit(): void {
    this.promo.gameId = Number(this.promo.gameId);
    this.promo.promoDiscount = Number(this.promo.promoDiscount);
    this.promo.promoDuration = this.toUnixTS(this.promoDuration);
    // console.log(this.promo);
    this.promoService.updatePromo(this.promo, this.promoId).subscribe(async data => {
      console.log(data);
    });
  }

}
