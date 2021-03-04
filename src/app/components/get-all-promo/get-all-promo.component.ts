import {Component, OnInit} from '@angular/core';
import {PromoService} from '../../services/promo.service';

@Component({
  selector: 'app-get-all-promo',
  templateUrl: './get-all-promo.component.html',
  styleUrls: ['./get-all-promo.component.scss']
})
export class GetAllPromoComponent implements OnInit {

  promo;
  pages = [];

  constructor(
    private promoService: PromoService
  ) {
  }

  ngOnInit(): void {
    this.promoService.getAllPromo(1).subscribe(async data => {
      this.promo = data.data.getAllPromo;
      console.log(this.promo);
    });
    this.promoService.getTotalPromo().subscribe(async data => {
      console.log(data.data.getTotalPromo);
      const count = data.data.getTotalPromo / 10;
      for (let i = 0; i < count; i++) {
        this.pages.push(i + 1);
      }
    });
  }

  onClick(page): void{
    this.promoService.getAllPromo(page).subscribe(async data => {
      this.promo = data.data.getAllPromo;
      console.log(this.promo);
    });
  }

}