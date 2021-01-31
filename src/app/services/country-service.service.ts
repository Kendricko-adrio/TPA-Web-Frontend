import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable} from 'rxjs';
import { Query } from '../models/query';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(
    private apollo:Apollo,
  ) { }

  getAllCountry():Observable<Query>{
    return this.apollo.query<Query>({
      query: gql`
      query{
        getAllCountry{
          Name,
          Code
        }
      }
      `
    })
  }
}
