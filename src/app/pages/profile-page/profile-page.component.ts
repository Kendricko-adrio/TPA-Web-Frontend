import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  username;

  constructor(private actRoute: ActivatedRoute,
              private userService: UserService) {
  }

  user;
  loaded: Promise<boolean>;

  ngOnInit(): void {
    // this.userService.getAuthUser().subscribe(async (data) => {
    //   UserService.userAuth = data.data.getAuthUser;
    //   // this.user = UserService.userAuth;
    //   console.log(UserService.userAuth);
    //   this.loaded = Promise.resolve(true);
    // }, (error) => {
    //   UserService.userAuth = null;
    //   console.log('there was an error sending the query', error);
    //   this.loaded = Promise.resolve(true);
    // });

    this.username = this.actRoute.snapshot.paramMap.get('username');
    console.log(this.username);
    this.userService.getUserByLink(this.username).subscribe(async data => {
      this.user = data.data.getUserByLink;
      console.log(this.user);
    });


  }

}
