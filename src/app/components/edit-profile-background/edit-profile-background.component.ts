import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-background',
  templateUrl: './edit-profile-background.component.html',
  styleUrls: ['./edit-profile-background.component.scss']
})
export class EditProfileBackgroundComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  user;
  bg;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.bg = this.user.currProfileBackground;
  }

  onClick(bg): void{
    this.bg = bg;
  }

  onUpdate(): void{
    this.userService.setCurrProfileBackground(this.bg.backgroundId).subscribe(data => {
      console.log('sukses');
    });
  }

}
