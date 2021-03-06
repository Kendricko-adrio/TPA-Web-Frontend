import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-theme',
  templateUrl: './edit-profile-theme.component.html',
  styleUrls: ['./edit-profile-theme.component.scss']
})
export class EditProfileThemeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  user;
  theme;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    this.theme = this.user.currTheme;
  }

  onUpdate(): void{
    this.userService.setCurrTheme(this.theme.themeId).subscribe(data => {
      console.log('sukses');
    });
  }

  onClick(clicked): void{
    this.theme = clicked;
  }
}
