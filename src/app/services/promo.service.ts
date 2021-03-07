import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Query} from '../models/query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(
    private apollo: Apollo,
  ) {
  }

  deletePromo(id): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation deletePromo($id: Int!){
  deletePromo(id: $id){
    promoId
  }
}
      `,
      variables: {
        id: id
      }
    });
  }
  getTotalPromo(): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getTotalPromo{
        getTotalPromo
      }
      `
    });
  }

  getPromoById(id): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getPromoById($id: Int!){
  getPromoById(Id: $id){
    promoId,
    promoDiscount,
    promoDuration,
    gameId
  }
}
      `,
      variables: {
        id: id
      }
    });
  }

  insertPromo(promo): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation insertPromo($promo: PromoInput!){
  insertPromo(promo: $promo){
    promoId,
    promoDiscount,
    promoDuration,
  }
}
      `,
      variables: {
        promo: promo
      }
    });
  }

  updatePromo(promo, id): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation updatePromo($promo: PromoInput! $id: Int!){
  updatePromo(promo: $promo, id: $id){
    promoDiscount,
    promoDuration,
    gameId
  }
}
      `,
      variables: {
        promo: promo,
        id: id
      }
    });
  }

  getAllPromo(page): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query getAllPromo($page: Int!){
  getAllPromo(page: $page){
    promoId,
    promoDiscount,
    promoDuration,
    game{
      Image,
      Name,
      Price

    }
  }
}
      `,
      variables:{
        page: page,
      }
    });
  }


}
