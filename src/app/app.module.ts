import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {FeatureCardComponent} from './components/feature-card/feature-card.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SocialAuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {OtpPageComponent} from './pages/otp-page/otp-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {ProfileHeadComponent} from './components/profile-head/profile-head.component';
import {RecentGameComponent} from './components/recent-game/recent-game.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditGeneralComponent } from './components/edit-general/edit-general.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { EditProfileBackgroundComponent } from './components/edit-profile-background/edit-profile-background.component';
import { EditMiniProfileComponent } from './components/edit-mini-profile/edit-mini-profile.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ManageGameComponent } from './pages/manage-game/manage-game.component';
import { GetAllgamePaginateComponent } from './components/get-allgame-paginate/get-allgame-paginate.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import {InsertGameComponent} from './pages/insert-game/insert-game.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManagePromosComponent } from './pages/manage-promos/manage-promos.component';
import { GetAllPromoComponent } from './components/get-all-promo/get-all-promo.component';
import { InsertPromoComponent } from './pages/insert-promo/insert-promo.component';
import { UpdatePromoComponent } from './pages/update-promo/update-promo.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { GetAlluserPaginatedComponent } from './components/get-alluser-paginated/get-alluser-paginated.component';
import { ReportUserPageComponent } from './pages/report-user-page/report-user-page.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { UnsuspendRequestComponent } from './components/unsuspend-request/unsuspend-request.component';
import { SearchGameCardComponent } from './components/search-game-card/search-game-card.component';
import { SearchGamePageComponent } from './pages/search-game-page/search-game-page.component';
import { SearchFilterPreviewComponent } from './components/search-filter-preview/search-filter-preview.component';
import { GameSearchedCardComponent } from './components/game-searched-card/game-searched-card.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SearchBarComponent,
    FeatureCardComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    OtpPageComponent,
    ProfilePageComponent,
    ProfileHeadComponent,
    RecentGameComponent,
    EditProfileComponent,
    EditGeneralComponent,
    EditAvatarComponent,
    EditProfileBackgroundComponent,
    EditMiniProfileComponent,
    ProfileSidebarComponent,
    AdminLoginComponent,
    ManageGameComponent,
    GetAllgamePaginateComponent,
    GameCardComponent,
    InsertGameComponent,
    UpdateGameComponent,
    FooterComponent,
    ManagePromosComponent,
    GetAllPromoComponent,
    InsertPromoComponent,
    UpdatePromoComponent,
    ManageUserComponent,
    GetAlluserPaginatedComponent,
    ReportUserPageComponent,
    ReportListComponent,
    UnsuspendRequestComponent,
    SearchGameCardComponent,
    SearchGamePageComponent,
    SearchFilterPreviewComponent,
    GameSearchedCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    RecaptchaModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '416707807228-ufnu9s773n1j04lk1jnchj0h4dm8d6uo.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
