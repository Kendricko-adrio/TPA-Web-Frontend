import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-feature-badge',
  templateUrl: './edit-feature-badge.component.html',
  styleUrls: ['./edit-feature-badge.component.scss']
})
export class EditFeatureBadgeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }
  user;
  currBadge;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    console.log(this.user);
    // console.log(this.user.ownBadge[0]);
    this.currBadge = this.user.currBadge;
  }

  onClick(ob): void{
    this.currBadge = ob;
  }

  onUpdate(): void{
    this.userService.setCurrBadge(this.currBadge.badgeId).subscribe(data => {
      console.log('sukses');
    });
  }
}
