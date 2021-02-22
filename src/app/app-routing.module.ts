import {OtpPageComponent} from './pages/otp-page/otp-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardGuard} from '../guard/auth-guard.guard';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {EditProfileComponent} from './pages/edit-profile/edit-profile.component';
import {WaitProfileGuard} from '../guard/wait-profile.guard';
import {GetAuthGuard} from '../guard/get-auth.guard';
import {AdminLoginComponent} from './pages/admin-login/admin-login.component';
import {ManageGameComponent} from './pages/manage-game/manage-game.component';
import {InsertGameComponent} from './pages/insert-game/insert-game.component';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'register/otp',
    component: OtpPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'user/:username',
    component: ProfilePageComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'user/:username/edit',
    component: EditProfileComponent,
    canActivate: [WaitProfileGuard]
  },
  {
    path: 'login/admin',
    component: AdminLoginComponent,
  },
  {
    path: 'admin/manage-game',
    component: ManageGameComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'admin/manage-game/insert',
    component: InsertGameComponent,
    canActivate: [GetAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
