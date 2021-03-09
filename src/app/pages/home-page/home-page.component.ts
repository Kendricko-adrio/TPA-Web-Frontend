import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // loaded: {loading: Promise<boolean>};
  constructor(
    private userService: UserService
  ) { }
  loaded: Promise<boolean>;
  user;
  ngOnInit(): void {
    this.user = UserService.userAuth;
    // this.userService.getAuthUser().subscribe(async (data) => {
    //   UserService.userAuth = data.data.getAuthUser;
    //   console.log(UserService.userAuth);
    //   this.loaded = Promise.resolve(true);
    // }, (error) => {
    //   UserService.userAuth = null;
    //   console.log('there was an error sending the query', error);
    //   this.loaded = Promise.resolve(true);
    // });
    // this.loaded = Promise.resolve(true);
    // this.loaded = this.userService.getUserAuth();
    // this.loaded = UserService.loaded;


  }

}
