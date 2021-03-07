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

  getPost(postId): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getPost($postId: Int!){
  getPost(postId: $postId){
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
