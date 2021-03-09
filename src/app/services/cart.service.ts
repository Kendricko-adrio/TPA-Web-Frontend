import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private apollo: Apollo,
  ) {
  }

  insertCart(userId, gameId): any {
    return this.apollo.mutate({
      mutation: gql`
        mutation insertCart($userId: Int! $gameId: Int!){
  insertCart(userId: $userId, gameId: $gameId){
    userId,
    gameId
  }
}
      `,
      variables: {
        userId: userId,
        gameId: gameId
      }
    });
  }
  deleteCart(gameId): any {
    return this.apollo.mutate({
      mutation: gql`
       mutation deleteCart($gameId: Int!){
  deleteCart(gameId: $gameId){
    userId,
    gameId
  }
}
      `,
      variables: {
        gameId: gameId
      }
    });
  }

  getUserCart(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
query getUserCart{
  getUserCart{
    userId
    game{
    ID,
      Name,
      Description,
      Price,
      imageBanner
    }
  }
}
      `
    });
  }

}
