import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit {

  constructor() { }

  @Input() user?;
  @Input() frame?;
  ngOnInit(): void {
  }

}
