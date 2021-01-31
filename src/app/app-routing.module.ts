import {OtpPageComponent} from './pages/otp-page/otp-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardGuard} from '../guard/auth-guard.guard';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'register/otp',
    component: OtpPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'user/:username',
    component: ProfilePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
