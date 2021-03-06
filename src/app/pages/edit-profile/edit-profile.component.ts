import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  user = UserService.userAuth;
  // loaded: Promise<boolean>;
  updateId: string;
  buttons = {button1: false, button2: false, button3: false, button4: false,
    button5: false, button6: false};

  onClick(buttonId): void {
    console.log(buttonId);
    console.log(this.updateId);
    Object.keys(this.buttons).forEach(key => {
      if (key === buttonId) {
        this.buttons[key] = true;
      } else {
        this.buttons[key] = false;
      }
    });
  }

  ngOnInit(): void {


  }
}
