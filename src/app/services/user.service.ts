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

  public static userAuth: Observable<any>;
  public static loaded: Promise<boolean>;

  constructor(
    private apollo: Apollo,
  ) {
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
    games{
      Name,
      Description,
      Image
    }
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
          PhotoUrl
        }
      }
      `
    }).toPromise();
  }

  setLogOutUser(username) {
    this.apollo.mutate({
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
    }).subscribe(({data}) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
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
              games{
      Name,
      Description,
      Image
    }
  }
}
      `,
      variables: {
        username
      }
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

  loginUser(usernames, passwords): boolean {
    this.apollo.mutate({
      mutation: gql`
      mutation login($username: String!, $password: String!){
        loginUser(input:{username: $username, password: $password})
      }
      `,
      variables: {
        username: usernames,
        password: passwords

      }
    }).subscribe(data => {
      console.log('got data', data);
      return true;
    }, (error) => {
      console.log('there was an error sending the query', error);
      return false;
    });

    return false;
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
