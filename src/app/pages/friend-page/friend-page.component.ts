import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.component.html',
  styleUrls: ['./friend-page.component.scss']
})
export class FriendPageComponent implements OnInit {

  constructor() { }

  buttons = {button1: false, button2: false};

  ngOnInit(): void {
  }

  onClick(buttonId): void {

    // console.log(this.updateId);
    Object.keys(this.buttons).forEach(key => {
      if (key === buttonId) {
        this.buttons[key] = true;
      } else {
        this.buttons[key] = false;
      }
    });
    console.log(buttonId.button2);
  }

}
