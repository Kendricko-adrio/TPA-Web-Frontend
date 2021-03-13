import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private apollo: Apollo
  ) { }



  getItem(itemId): Observable<Query>{
    return this.apollo.query({
      query: gql `
      query getItem($itemId: Int!){
  getItem(itemId: $itemId){
    itemsId,
    itemName,
    itemDescription,
    itemPhoto,
    game{
      ID,
      Name,
      imageBanner
    }
  }
}
      `,
      variables: {
        itemId: itemId
      }
    });
  }

  getRequestTransaction(page): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getRequestTransaction($page: Int!){
  getRequestTransaction(page: $page){
    itemsId,
    itemName,
    itemPhoto,
    itemDescription,
    game{
      ID
    }
  }
}
      `,
      variables: {
        page: page
      }
    });
  }

  getUserItemsByGamePaginate(gameId, userId, page, search): Observable<Query>{
    return this.apollo.query<Query>({
      query : gql `
        query getUserItemsByGamePaginate($gameId: Int! $userId: Int! $page: Int! $search: String){
  getUserItemsByGamePaginate(gameId:$gameId, userId: $userId, page: $page, search: $search){
    itemsId,
    itemName,
    itemDescription,
    itemPhoto,
    game{
      ID,
      Name,
      imageBanner,
    }
  }
}
      `,
      variables: {
        gameId: gameId,
        userId: userId,
        page: page,
        search: search
      }
    });
  }


}
