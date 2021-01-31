import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable} from 'rxjs';
import { Query } from '../models/query';
import gql from 'graphql-tag';
// promise observable

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(
    private apollo:Apollo,
    
  ) { }

  getGames():Observable<Query>{
    return this.apollo.query<Query>({
      query: gql`
        query test{
          allGame{
            ID,
            Name,
            Description,
            Price,
            Rating,
            Image
          }
        }
      `
    })
  }

}
