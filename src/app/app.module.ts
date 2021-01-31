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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    RecaptchaModule
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
