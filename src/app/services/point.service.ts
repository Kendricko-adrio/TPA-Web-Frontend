import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(
    private apollo: Apollo
  ) {
  }

  insertFrame(frameId): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation insertFrame($frameId: Int!){
  insertFrame(frameId: $frameId){
    frameId,
    frameUrl,
    framePoint
  }
}
      `,
      variables: {
        frameId: frameId
      }
    });
  }

  getPurchasableAvatar(): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getPurchasableAvatar{
  getPurchasableAvatar{
    avatarId,
    avatarUrl,
    avatarPoint
  }
}
      `
    });
  }

  getPurchasableFrame(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query GetPurchasableFrame{
  getPurchasableFrame{
  frameId,
  frameUrl,
  framePoint
}
}
      `
    });
  }

  getPurchasableMini(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
  query getPurchasableMini{
  getPurchasableMini{
  miniId,
  miniUrl,
  miniPoint
}
}
      `
    });
  }

  getPurchasableBg(): Observable<Query> {
    return this.apollo.query({
      query: gql`
      query getPurchasableBg{
  getPurchasableBg{
    backgroundId,
    backgroundUrl,
    backgroundPoint
  }
}
      `
    });
  }

}
