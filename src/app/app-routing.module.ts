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
import {UpdateGameComponent} from './pages/update-game/update-game.component';
import {ManagePromosComponent} from './pages/manage-promos/manage-promos.component';
import {AdminGuard} from '../guard/admin.guard';
import {InsertPromoComponent} from './pages/insert-promo/insert-promo.component';
import {UpdatePromoComponent} from './pages/update-promo/update-promo.component';
import {ManageUserComponent} from './pages/manage-user/manage-user.component';
import {ReportUserPageComponent} from './pages/report-user-page/report-user-page.component';
import {SearchGamePageComponent} from './pages/search-game-page/search-game-page.component';
import {FriendPageComponent} from './pages/friend-page/friend-page.component';
import {GameDetailComponent} from './pages/game-detail/game-detail.component';
import {WishlistPageComponent} from './pages/wishlist-page/wishlist-page.component';



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
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-game/insert',
    component: InsertGameComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-game/update/:gameId',
    component: UpdateGameComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-promo',
    component: ManagePromosComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-promo/insert',
    component: InsertPromoComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-promo/update/:promoId',
    component: UpdatePromoComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-user',
    component: ManageUserComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'admin/manage-user/view-report/:username',
    component: ReportUserPageComponent,
    canActivate: [GetAuthGuard, AdminGuard]
  },
  {
    path: 'search/:search',
    component: SearchGamePageComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'friend',
    component: FriendPageComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'games/:gameId',
    component: GameDetailComponent,
    canActivate: [GetAuthGuard]
  },
  {
    path: 'my-wishlist',
    component: WishlistPageComponent,
    canActivate: [GetAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
