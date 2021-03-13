import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';
import {iterateObserversSafely} from '@apollo/client/utilities';

@Injectable({
  providedIn: 'root'
})
export class ItemTransactionService {

  constructor(
    private apollo: Apollo
  ) {
  }

  getMyBuy(itemId): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getMyBuy($itemId: Int!){
  getMyBuy(itemId: $itemId){
    transactionId,
    buyerPay
    item{
       itemsId,
      itemPhoto,
      itemName
    }
  }
}
      `,
      variables: {
        itemId: itemId
      }
    });
  }
  getMySell(itemId): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getMySell($itemId: Int!){
  getMySell(itemId: $itemId){
    transactionId,
    buyerPay
    item{
       itemsId,
      itemPhoto,
      itemName
    }
  }
}
      `,
      variables: {
        itemId: itemId
      }
    });
  }

  buyItem(itemId, price): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation buyItem($itemId: Int! $price: Int!){
  buyItem(itemId: $itemId, price: $price){
    transactionId
  }
}
      `,
      variables: {
        itemId: itemId,
        price: price
      }
    });
  }

  sellItem(itemId, price): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation sellItem($itemId: Int! $price: Int!){
  sellItem(itemId: $itemId, price: $price){
    transactionId
  }
}
      `,
      variables: {
        itemId: itemId,
        price: price
      }
    });
  }

  getSell(itemId): any {
    return this.apollo.watchQuery<any>({
      query: gql`
      query getSell($itemId: Int!){
  getSell(itemId: $itemId){
    buyerPay,
    transactionId,
    userSellerId
  }
}
      `,
      variables: {
        itemId: itemId
      },
      pollInterval: 5000
    });
  }

  getBuy(itemId): any {
    return this.apollo.watchQuery<any>({
      query: gql`
query getBuy($itemId: Int!){
  getBuy(itemId: $itemId){
    buyerPay,
    transactionId,
    userBuyerId
  }
}
      `,
      variables: {
        itemId: itemId
      },
      pollInterval: 5000
    });
  }

  getTransactionByItem(itemId): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query getTransactionByItem($itemId: Int!){
  getTransactionByItem(itemId: $itemId){
    buyerPay,
    UpdatedAt
  }
}
      `,
      variables: {
        itemId: itemId
      }
    });
  }
}
