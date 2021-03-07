import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';
import gql from 'graphql-tag';
import {Game} from '../models/game';

// promise observable

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(
    private apollo: Apollo,
  ) {
  }



  getGameById(id): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getGameById($id: Int!){
  getGameById(id: $id){
    Name,
    Description,
    Price,
    imageBanner,
    Image,
    tag,
    systemRequirement,
    gameSlideShow{
      slideShowId,
      slideShowUrl
    },
    genre{
      genreId,
      genreName
    }
  }
}
      `,
      variables: {
        id: id
      }
    });
  }

  deleteGame(id): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation deleteGame($id: Int!){
  deleteGame(id: $id)
}
      `, variables: {
        id: id,
      }
    });
  }

  insertGame(game: Game): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation insertGame($game: gameInput!){
  insertGame(game: $game){
    ID,
genre{
      genreName
    }
    gameSlideShow{
      slideShowUrl
    }
  }
}
      `,
      variables: {
        game: game
      }
    });
  }

  updateGame(game: Game): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateGame($game : gameInput!){
  updateGame(game: $game){
    ID,
      Name,
      Description
  }
}
      `,
      variables: {
        game: game
      }
    });
  }


  getGamePaginate(page): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query getGamesPaginated($page : Int!){
  getAllGamesPaginated(page : $page){
    ID,
    Name,
    Description,
    Price,
    Rating,
    Image,
    imageBanner
  }
}
      `,
      variables: {
        page: page
      }
    });
  }

  getGames(): Observable<Query> {
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
    });
  }

  searchGameInfinite(title, page): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getGameInfinite($title: String! $page: Int!){
  searchGameInfinite(title: $title, page: $page){
    Name,
    Description,
    Price,
    Image,
    imageBanner,
    CreatedAt
  }
}
      `,
      variables: {
        title: title,
        page: page,
      }
    });
  }

  getTotalGames(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getTotalGames{
  getTotalGame
}
      `
    });
  }

  getALlGenre(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAllGenre{
  getAllGenre{
    genreId,
    genreName
  }
}
      `
    });
  }

  getFilterGame(price, genre, title): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getFilterGame($genre: Int! $price: Int! $title: String!){
  getFilterGame(genre: $genre, price: $price, title: $title){
    Name,
    Description,
    Price,
    Image,
    CreatedAt
  }
}
      `,
      variables: {
        genre: genre,
        price: price,
        title: title
      }
    });
  }

  searchGameByTitle(title): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query searchGameByTitle($title: String!){
  searchGameByTitle(title: $title){
    ID,
    Name,
    Image,
    Price,
    imageBanner
  }
}
`,
      variables: {
        title: title
      }
    });
  }

  newGame(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getNewGame{
  getNewGame{
  ID,
    Name,
    imageBanner,
    genre{
      genreName
    },
    Price,
    gameSlideShow{
      slideShowUrl
    }
  }
}
      `
    });
  }

  getOnSale(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getGameOnSale{
  getOnSale{
    game{
    ID,
      Name,
      Price,
      imageBanner,
    }
    promoDiscount
  }
}
      `
    });
  }

}
