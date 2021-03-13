import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-topup-wallet-page',
  templateUrl: './topup-wallet-page.component.html',
  styleUrls: ['./topup-wallet-page.component.scss']
})
export class TopupWalletPageComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
  code;
  ngOnInit(): void {

  }
  onSubmit(): void{
    this.userService.insertWallet(this.code).subscribe(async data => {
        console.log('berhasil');
    },
      (error => {
        console.log('gagal');
        console.log(this.code);
      })
      );

  }

}
