import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private apollo: Apollo
  ) {
  }

  insertPost(desc, postAsset): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation insertPost($desc: String! $postAsset: String!){
  insertPost(desc: $desc, postAsset: $postAsset){
    postId
  }
}
      `,
      variables : {
        desc: desc,
        postAsset: postAsset,
      }
    });
  }

  insertReview(review, helpful, gameId): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation insertReview($review: String! $helpful: Boolean! $gameId: Int!){
  insertReview(review: $review, helpful: $helpful, gameId: $gameId){
    postId
  }
}
      `,
      variables: {
        review: review,
        helpful: helpful,
        gameId: gameId
      }
    });
  }

  getGameInDiscussion(): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getGameInDiscussion{
  getGameInDiscussion{
    Name,
    imageBanner,
    post{
      postId,
      postDescription,
      postTitle,
      userId
    }
  }
}
      `
    });
  }

  insertCommand(postId, command): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation insertCommand($postId: Int! $command: String!){
  insertCommand(postId: $postId, command: $command){
    command
  }
}
      `,
      variables:{
        postId: postId,
        command: command
      }

    })
  }

  getCommandPaginate(postId, page): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql `
      query getCommandPaginate($postId: Int! $page: Int!){
  getCommandPaginate(postId: $postId, page: $page){
    userId,
    command
  }
}
      `,
      variables: {
        postId: postId,
        page: page
      }
    });
  }


  getReviewByGameUpvoted(gameId): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getReviewByGameUpvoted($gameId: Int!){
  getReviewByGameUpvoted(gameId: $gameId){
  postId,
    userId,
      postHelpful,
      totalLike,
      totalDislike,
      postDescription,
      gameId
  }
}
      `,
      variables: {
        gameId: gameId
      }
    });
  }
  getReviewByGameRecent(gameId): Observable<Query>{
    return this.apollo.query<Query>({
      query: gql `
      query getReviewByGameRecent($gameId: Int!){
  getReviewByGameRecent(gameId: $gameId){
  postId,
    userId,
    postHelpful,
    totalLike,
    totalDislike,
    postDescription,
    gameId
  }
}
      `,
      variables: {
        gameId: gameId
      }
    });
  }

  getPost(postId): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getPost($postId: Int!){
  getPost(postId: $postId){
     postId,
     postTitle,
    userId,
    gameId,
    postAsset,
    postType{
      postTypeId,
      postTypeName
    },
    postTypeId,
    postHelpful,
    postDescription,
    totalLike,
    totalDislike,
    likeDetail{
      postId,
      userId
    },
    commandDetail{
      userId,
      command,

    }
  }
}
      `,
      variables: {
        postId: postId
      }
    });
  }

  insertDislike(postId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation insertDislike($postId: Int!){\t
  insertDislike(postId: $postId){
    postId,
    userId,
    like
  }
}
      `,
      variables: {
        postId: postId
      }
    });
  }

  insertLike(postId): any {
    return this.apollo.mutate({
      mutation: gql`
        mutation insertLike($postId: Int!){
  insertLike(postId: $postId){
    postId,
      userId,
      like
  }
}
      `,
      variables: {
        postId: postId
      }
    });
  }

//   mutation insertLike($postId: Int!){
//   insertLike(postId: $postId){
//     postId,
//       userId,
//       like
//   }
// }

  getAllPost(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAllPost{
  getAllPost{
    postId,
    userId,
    gameId,
    postAsset,
    postType{
      postTypeId,
      postTypeName
    },
    postTypeId,
    postHelpful,
    postDescription,
    totalLike,
    totalDislike,
    likeDetail{
      postId,
      userId
    }
  }
}
      `
    });
  }
}
