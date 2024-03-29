import {Injectable, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';
import gql from 'graphql-tag';
import {AuthUser} from '../models/auth-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static userAuth: any;

  constructor(
    private apollo: Apollo,
  ) {
  }

  insertWallet(walletCode): any{
    return this.apollo.mutate({
      mutation: gql`
      mutation insertWallet($walletCode: String!){
  insertWallet(walletCode: $walletCode){
    money
  }
}
      `,
      variables: {
        walletCode: walletCode
      }
    });
  }

  setCurrProfileBackground(backgroundId): any{
    return this.apollo.mutate({
      mutation: gql`
      mutation setCurrProfileBackground($backgroundId: Int!){
  setCurrProfileBackground(backgroundIt: $backgroundId){
    userID
  }
}
      `,
      variables: {
        backgroundId: backgroundId,
      }
    });
  }

  getUserById(userId): any{
    return this.apollo.query<Query>({
      query: gql `
      query getUserById($userId: Int!){
getUserById(userId: $userId){
     userID,
    userName,
    password,
    FirstName,
    LastName,
    PhotoUrl,
    role,
    FirstName,
    LastName,
    Email,
PhotoUrl,
    customUrl
    games{
      Name,
      Description,
      Image
    },
    friends{
      userID,
      userName,
      PhotoUrl,
    },
    wishlist{
      Name,
      Description,
      imageBanner
    },
    money,
    ownBadge{
      badgeId,
      badgeName,
      badgeUrl
    }
    currMiniBgImg,
    ownMiniBg{
      miniId,
      miniUrl
    },
    currBadge{
      badgeName,
      badgeUrl
    },
    currTheme{
      themeId,
      themeName
    },
    ownTheme{
      themeId,
      themeName
    },
    ownProfileBackground{
      backgroundId,
      backgroundUrl
    },
    currProfileBackground{
      backgroundId,
      backgroundUrl
    },
    likeDetail{
      postId
    }
  }
}
      `,
      variables: {
        userId: userId
      }
    });
  }

  setCurrTheme(themeId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation setCurrTheme($themeId: Int!){
  setCurrTheme(themeId:$themeId){
    userName
  }
}
      `,
      variables: {
        themeId: themeId
      }
    });
  }

  setCurrMiniBg(imageUrl): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation setCurrMiniBg($imageUrl: String!){
  setCurrMiniBg(imageUrl: $imageUrl){
    userName,
    currMiniBgImg
  }
}
      `,
      variables: {
        imageUrl: imageUrl
      }
    });
  }

  setCurrBadge(badgeId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation setCurrBadge($badgeId: Int!){
  setCurrBadge(badgeId: $badgeId){
    userID
  }
}
      `,
      variables: {
        badgeId: badgeId
      }
    });
  }

  addGameToWishlist(gameId): any {
    return this.apollo.mutate({
      mutation: gql`
mutation addGameToWishlist($gameId: Int!){
  addGameToWishlist(gameId: $gameId){
    userName
    wishlist{
      Name,
      ID,
      Description
    }
  }
}
      `,
      variables: {
        gameId: gameId
      }
    });
  }

  deleteWishlist(gameId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation deleteWishlist($gameId: Int!){
  deleteWishlist(gameId: $gameId){
    userID
  }
}
      `,
      variables: {
        gameId: gameId
      }
    });
  }

  setCurrFrame(frameUrl): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation setCurrFrame($frameUrl: String!){
  setCurrFrame(frameUrl: $frameUrl){
    userID
  }
}
      `,
      variables: {
        frameUrl: frameUrl
      }
    });
  }

  getAuthUser(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
     query getAuth{
  getAuthUser{
    userID,
    userName,
    password,
    FirstName,
    LastName,
    PhotoUrl,
    role,
    FirstName,
    LastName,
    Email,
    PhotoUrl,
    customUrl,
    games{
      ID,
      Name,
      Description,
      Image
    },
    friends{
      userID,
      userName,
      PhotoUrl,

    },
    wishlist{
      Name,
      Description,
      imageBanner
    },
    money,
    ownBadge{
      badgeId,
      badgeName,
      badgeUrl
    }
    currMiniBgImg,
    ownMiniBg{
      miniId,
      miniUrl
    },
    currBadge{
      badgeName,
      badgeUrl
    },
    currTheme{
      themeId,
      themeName
    },
    ownTheme{
      themeId,
      themeName
    },
    ownProfileBackground{
      backgroundId,
      backgroundUrl
    },
    currProfileBackground{
      backgroundId,
      backgroundUrl
    },
    ownFrame{
      frameId,
      frameUrl
    },
    currFrame,
    point
  }
}
      `
    });
  }

  getAuthUser2(): Promise<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAuth{
        getAuthUser{
          userID,
          userName,
          password,
          FirstName,
          LastName,
          PhotoUrl,
          customUrl
        }
      }
      `
    }).toPromise();
  }

  getAuthUser3(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAuth{
        getAuthUser{
          userID,
          userName,
          password,
          FirstName,
          LastName,
          PhotoUrl
        }
      }
      `
    });
  }

  updateAvatar(imageUrl): void {
    this.apollo.mutate({
      mutation: gql`
      mutation updateImageUrl($imageUrl : String!){
  updateImage(imageUrl: $imageUrl){
    PhotoUrl
  }
}
      `,
      variables: {
        imageUrl: imageUrl
      }
    }).subscribe(({data}) => {
      console.log('got data', data);
      return true;
    }, (error) => {
      console.log('there was an error sending the query', error);
      return false;
    });
  }

  setLogOutUser(username): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation logOutUser($username: String!){
  logoutUser(username: $username){
    userID,
    userName,
    FirstName
  }
}
      `,
      variables: {
        username

      }
    });
  }

  getUserByUsername(username): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getUserByUsername($username: String!){
  getUser(input:{Email: $username}){
    userID,
    userName,
    FirstName,
    LastName,
    Email,
    PhotoUrl,
    realName,
    customUrl,
    CountryId,
    hideAward,
    summary,
    hideAward,
    games{
      Name,
      Description,
      Price,
      Image
    },
    items{
      itemsId,
      gameId,
      itemName,
      itemDescription,
      itemPhoto,
    }
  }
}
      `,
      variables: {
        username
      }
    });
  }

  getAdmin(username, password): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAdmin($username: String! $password: String!){
  getAdmin(username: $username, password: $password){
    userID,
    role,
    userName
  }
}
      `,
      variables: {
        password: password,
        username: username
      }
    });
  }

  getALlUserPaginated(page): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAllUserPaginated($page: Int!){
  getAllUserPaginated(page: $page){
    userID,
    userName,
    realName,
    PhotoUrl,
    statusId
  }
}
      `,
      variables: {
        page: page
      }
    });
  }

  getTotalUser(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getTotalUser{
  getTotalUser
}
      `
    });
  }

  getUserByLink(customUrl): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
    query getUserByLink($customUrl: String!){
  getUserByLink(customUrl: $customUrl){
    userID,
    userName,
    FirstName,
    LastName,
    Email,
    PhotoUrl,
    realName,
    customUrl,
    CountryId,
    hideAward,
    summary,
    hideAward,
    currFrame,
    games{
    ID
      Name,
      Description,
      Price,
      Image,
      imageBanner
    },
    friends{
      userID,
      userName,
      PhotoUrl,
      level,
      currMiniBgImg,
      ownBadge{
        badgeName,
        badgeUrl,
        badgeId
      },
      currBadge{
        badgeName,
        badgeUrl,
      }
    },
    level,
    ownBadge{
      badgeName,
      badgeUrl
    },
    currBadgeId,
    currTheme{
      themeName
    }
    items{
      itemsId,
      gameId,
      itemName,
      itemDescription,
      itemPhoto,
    }
  }
}
      `,
      variables: {
        customUrl: customUrl
      }
    });
  }


  updateGeneral(profileName, realName, customUrl, countryId, summary, hideAward): any {
    this.apollo.mutate({
      mutation: gql`
      mutation update($profileName: String! $realName: String! $customUrl: String! $countryId: Int! $summary: String! $hideAward: Boolean!){
  updateGeneral(profileName: $profileName, realName: $realName, customUrl: $customUrl, countryId: $countryId, summary: $summary, hideAward: $hideAward){
    userID,
    userName,
    customUrl,
    hideAward,
    summary
  }
}
      `, variables: {
        profileName: profileName,
        realName: realName,
        customUrl: customUrl,
        countryId: countryId,
        summary: summary,
        hideAward: hideAward
      }
    }).subscribe(({data}) => {
      console.log('got data', data);
      return true;
    }, (error) => {
      console.log('there was an error sending the query', error);
      return false;
    });
  }

  insertUser(firstname, lastname, authToken, email, idToken, photo, provider) {
    this.apollo.mutate({
      mutation: gql`
      mutation createUser($firstname: String!, $lastname: String!, $authToken: String!, $email: String!, $idToken: String!, $photo: String!, $provider: Int!){
        createUser(input:{FirstName: $firstname, LastName: $lastname, AuthToken: $authToken, Email:$email, IdToken:$idToken, PhotoUrl: $photo, ProviderId: $provider}){
          userID,
          FirstName
        }
      }
      `,
      variables: {
        firstname,
        lastname,
        authToken,
        email,
        idToken,
        photo,
        provider

      }
    }).subscribe(({data}) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }


  insertNewAccount(email, countryId) {
    this.apollo.mutate({
      mutation: gql`
      mutation createAccount($email: String!, $countryId: Int!){
        createAccount(input:{email: $email, countryId: $countryId}){
          userID,
          Email
        }
      }
      `,
      variables: {
        email,
        countryId

      }
    }).subscribe(async ({data}) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  finalizeAccount(usernames, passwords, otp): any {
    this.apollo.mutate({
      mutation: gql`
      mutation finalizeUser($username: String!, $password: String!, $otp: String!){
        createFullAccount(input:{userName: $username, password: $password, otp: $otp})
      }
      `,
      variables: {
        username: usernames,
        password: passwords,
        otp: otp

      }
    }).subscribe(data => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  loginUser(usernames, passwords): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation login($username: String!, $password: String!){
  loginUser(input:{username: $username, password: $password}){
    userID,
    userName,
    password,
    FirstName,
    LastName,
    PhotoUrl,
    games{
      Name,
      Description,
      Image
    }
    customUrl
  }
}
      `,
      variables: {
        username: usernames,
        password: passwords

      }
    });
    //   .subscribe(data => {
    //   console.log('got data', data);
    //
    // }, (error) => {
    //   console.log('there was an error sending the query', error);
    //
    // });

    // return false;
  }

  // getUserAuth(): any{
  //   this.getAuthUser().subscribe(async (data) => {
  //     UserService.userAuth = data.data.getAuthUser;
  //     console.log(UserService.userAuth);
  //     Promise.resolve(true);
  //     // console.log(loaded.loaded)
  //   }, (error) => {
  //     UserService.userAuth = null;
  //     console.log('there was an error sending the query', error);
  //     // UserService.loaded = Promise.resolve(true);
  //     return Promise.resolve(true);
  //
  //   });
  // }

}
