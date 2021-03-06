import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  constructor() { }
  @Input() user;
  elementId;
  ngOnInit(): void {
  }

  onLeave(): void {
    this.elementId = -1;
    console.log("leave");
  }

  onHoverFriend(id): void{
    console.log(id);
    this.elementId = id;
  }

}
