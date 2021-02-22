import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {AuthUser} from '../../models/auth-user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  userAuth = UserService.userAuth;
  user;

  ngOnInit(): void {
    console.log(UserService.userAuth);
    // this.userAuth = this.userService.getUserAuth();

    // console.log(this.userAuth);
  }

  logOut(): void {
    this.userService.setLogOutUser('').subscribe(({data}) => {
      console.log('got data', data);
      location.reload();
    }, (error) => {
      console.log('there was an error sending the query', error);
    });

  }

}
