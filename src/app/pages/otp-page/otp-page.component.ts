import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})
export class OtpPageComponent implements OnInit {

  username="";
  password="";
  confirmPass="";
  otp="";
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.userService.finalizeAccount(this.username, this.password, this.otp.toString())
    // console.log(test)
  }
}
