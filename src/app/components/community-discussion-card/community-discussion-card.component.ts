import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-community-discussion-card',
  templateUrl: './community-discussion-card.component.html',
  styleUrls: ['./community-discussion-card.component.scss']
})
export class CommunityDiscussionCardComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService
  ) { }

  @Input() post;
  user;
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getUserById(this.post.userId).subscribe(data => {
      this.user = data.data.getUserById;
    });
  }

}
