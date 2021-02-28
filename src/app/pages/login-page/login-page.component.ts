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

  errMsg;
  user: SocialUser;
  username: '';
  password: '';
  isUserFound = false;

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {

  }

  submit() {
    this.isUserFound = this.userService.loginUser(this.username, this.password).subscribe(data => {
      console.log('got data', data);
      UserService.userAuth = data.data.loginUser;
      this.route.navigate(['/']);
    }, (error) => {
      console.log('there was an error sending the query', error);
      this.errMsg = 'email or pass wrong';
    });
    // console.log(this.isUserFound);
    // this.route.navigate(['/']);
  }

}
