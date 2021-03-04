import {Component, Input, OnInit} from '@angular/core';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-pending-card',
  templateUrl: './pending-card.component.html',
  styleUrls: ['./pending-card.component.scss']
})
export class PendingCardComponent implements OnInit {

  constructor(
    private friendService: FriendService
  ) { }
  @Input() user;

  ngOnInit(): void {
  }

  onAccept(): void{
    this.friendService.acceptRequest(this.user.userID).subscribe(data => {
      console.log('accepted');
    });
  }

  onDecline(): void{
    this.friendService.declineRequest(this.user.userID).subscribe(data => {
      console.log('decline');
    });
  }

}
