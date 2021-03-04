import { Component, OnInit } from '@angular/core';
import {FriendPageComponent} from '../../pages/friend-page/friend-page.component';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-pending-friend',
  templateUrl: './pending-friend.component.html',
  styleUrls: ['./pending-friend.component.scss']
})
export class PendingFriendComponent implements OnInit {

  constructor(
    private friendService: FriendService,
  ) { }

  request;
  ngOnInit(): void {
    this.friendService.getAllRequest().subscribe(async data => {
      console.log(data.data.getAllRequestFriend);
      this.request = data.data.getAllRequestFriend;
    });
  }

}
