import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-point-page',
  templateUrl: './point-page.component.html',
  styleUrls: ['./point-page.component.scss']
})
export class PointPageComponent implements OnInit {

  constructor() { }
  tab = 0;
  user;
  ngOnInit(): void {
    this.user = UserService.userAuth;
  }

}
