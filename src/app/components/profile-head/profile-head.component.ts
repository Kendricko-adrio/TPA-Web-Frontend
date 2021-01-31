import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.scss']
})
export class ProfileHeadComponent implements OnInit {

  constructor() {
  }

  @Input() user: any;

  ngOnInit(): void {
  }

}
