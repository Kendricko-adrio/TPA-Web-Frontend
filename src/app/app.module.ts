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
import {CommonModule} from '@angular/common';
import { FriendPageComponent } from './pages/friend-page/friend-page.component';
import { PendingFriendComponent } from './components/pending-friend/pending-friend.component';
import { PendingCardComponent } from './components/pending-card/pending-card.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { MyFriendsDetailComponent } from './components/my-friends-detail/my-friends-detail.component';
import { GameHomePreviewComponent } from './components/game-home-preview/game-home-preview.component';
import { NewTrendingGamesComponent } from './components/new-trending-games/new-trending-games.component';
import { TrendingCardComponent } from './components/trending-card/trending-card.component';
import { NewGamePreviewComponent } from './components/new-game-preview/new-game-preview.component';
import { GameOnSaleComponent } from './components/game-on-sale/game-on-sale.component';
import { OnSaleCardComponent } from './components/on-sale-card/on-sale-card.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameDisplayComponent } from './components/game-display/game-display.component';
import { GameSlideshowPreviewComponent } from './components/game-slideshow-preview/game-slideshow-preview.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { EditFeatureBadgeComponent } from './components/edit-feature-badge/edit-feature-badge.component';
import { FeatureBadgeCardComponent } from './components/feature-badge-card/feature-badge-card.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { MiniProfileComponent } from './components/mini-profile/mini-profile.component';
import { EditProfileThemeComponent } from './components/edit-profile-theme/edit-profile-theme.component';
import { CommunityPageComponent } from './pages/community-page/community-page.component';
import { CommunityPosterComponent } from './components/community-poster/community-poster.component';
import { CommunityPosterDetailComponent } from './pages/community-poster-detail/community-poster-detail.component';
import { CommunityReviewComponent } from './components/community-review/community-review.component';
import { CommandDetailComponent } from './components/command-detail/command-detail.component';
import { CommunityReviewDetailComponent } from './pages/community-review-detail/community-review-detail.component';
import { CommunityDiscussionComponent } from './components/community-discussion/community-discussion.component';
import { CommunityDiscussionCardComponent } from './components/community-discussion-card/community-discussion-card.component';
import { CommunityDiscussionDetailComponent } from './pages/community-discussion-detail/community-discussion-detail.component';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { AnotherPaymentComponent } from './components/another-payment/another-payment.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { InventoryModalComponent } from './components/inventory-modal/inventory-modal.component';
import {ChartsModule} from 'ng2-charts';
import { EditAvatarFrameComponent } from './components/edit-avatar-frame/edit-avatar-frame.component';
import { ProfileAvatarComponent } from './components/profile-avatar/profile-avatar.component';
import { GamePositifReviewComponent } from './components/game-positif-review/game-positif-review.component';
import { OnPositifReviewCardComponent } from './components/on-positif-review-card/on-positif-review-card.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { MarketDetailPageComponent } from './pages/market-detail-page/market-detail-page.component';
import { GameTopSaleComponent } from './components/game-top-sale/game-top-sale.component';
import { OnTopSaleCardComponent } from './components/on-top-sale-card/on-top-sale-card.component';
import { PointPageComponent } from './pages/point-page/point-page.component';
import { PointProfilebgTabComponent } from './components/point-profilebg-tab/point-profilebg-tab.component';
import { PointFrameTabComponent } from './components/point-frame-tab/point-frame-tab.component';
import { PointMinibgTabComponent } from './components/point-minibg-tab/point-minibg-tab.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TopupWalletPageComponent } from './pages/topup-wallet-page/topup-wallet-page.component';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';
import { SearchGenrePageComponent } from './pages/search-genre-page/search-genre-page.component';





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
    FriendPageComponent,
    PendingFriendComponent,
    PendingCardComponent,
    MyFriendsComponent,
    MyFriendsDetailComponent,
    GameHomePreviewComponent,
    NewTrendingGamesComponent,
    TrendingCardComponent,
    NewGamePreviewComponent,
    GameOnSaleComponent,
    OnSaleCardComponent,
    GameDetailComponent,
    GameDisplayComponent,
    GameSlideshowPreviewComponent,
    WishlistPageComponent,
    EditFeatureBadgeComponent,
    FeatureBadgeCardComponent,
    FriendCardComponent,
    MiniProfileComponent,
    EditProfileThemeComponent,
    CommunityPageComponent,
    CommunityPosterComponent,
    CommunityPosterDetailComponent,
    CommunityReviewComponent,
    CommandDetailComponent,
    CommunityReviewDetailComponent,
    CommunityDiscussionComponent,
    CommunityDiscussionCardComponent,
    CommunityDiscussionDetailComponent,
    CartDetailComponent,
    CheckoutPageComponent,
    AnotherPaymentComponent,
    InventoryPageComponent,
    ItemDetailComponent,
    InventoryModalComponent,
    EditAvatarFrameComponent,
    ProfileAvatarComponent,
    GamePositifReviewComponent,
    OnPositifReviewCardComponent,
    MarketPageComponent,
    MarketDetailPageComponent,
    GameTopSaleComponent,
    OnTopSaleCardComponent,
    PointPageComponent,
    PointProfilebgTabComponent,
    PointFrameTabComponent,
    PointMinibgTabComponent,
    TopupWalletPageComponent,
    DiscoveryPageComponent,
    SearchGenrePageComponent,

  ],
    imports: [
        CommonModule,
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
        ChartsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
