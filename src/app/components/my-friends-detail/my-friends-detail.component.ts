import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-friends-detail',
  templateUrl: './my-friends-detail.component.html',
  styleUrls: ['./my-friends-detail.component.scss']
})
export class MyFriendsDetailComponent implements OnInit {

  constructor() { }
  @Input() user;

  ngOnInit(): void {
  }

}
