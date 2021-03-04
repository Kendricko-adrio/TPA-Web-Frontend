import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(
    private apollo: Apollo,
  ) {
  }

  getTotalRequest(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getTotalRequestedFried{
  getTotalRequestFriend
}

      `
    });
  }

  declineRequest(userId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation declineFriendRequest($userId: Int!){
declineFriendRequest(userId: $userId){
    friendStatusId,
  }
}
      `,
      variables: {
        userId: userId
      }
    });
  }
  acceptRequest(userId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation acceptFriendRequest($userId: Int!){
  acceptFriendRequest(userId: $userId){
    friendStatusId,
  }
}
      `,
      variables: {
        userId: userId
      }
    });
  }

  getAllRequest(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAllRequest{
  getAllRequestFriend{
    user1{
    userID,
      userName,
PhotoUrl,
    }
    friendStatus{
      statusName
    }
  }
}
      `
    });
  }

}
