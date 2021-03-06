import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-mini-profile',
  templateUrl: './edit-mini-profile.component.html',
  styleUrls: ['./edit-mini-profile.component.scss']
})
export class EditMiniProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
  user;
  imgBg;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.imgBg = this.user.currMiniBgImg;
  }

  onClick(url): void{
    this.imgBg = url;
  }

  onUpdate(): void{
    this.userService.setCurrMiniBg(this.imgBg).subscribe(data => {
      console.log('sukses');
    });
  }
}
