import {UserService} from './../../services/user.service';

import {SocialAuthService, GoogleLoginProvider, SocialUser, SocialLoginModule} from 'angularx-social-login';
import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [SocialLoginModule, SocialAuthService]
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: SocialAuthService,
              private route: Router
    , private userService: UserService) {
  }

  user: SocialUser;
  username: '';
  password: '';

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.userService.insertUser(this.user.firstName, this.user.lastName, this.user.authToken, this.user.email, this.user.idToken, this.user.photoUrl, 1);
        console.log(this.user);
        this.route.navigate(['/']);
      }
    });
  }

  submit() {
    this.userService.loginUser(this.username, this.password);
    this.route.navigate(['/']);
  }

}
