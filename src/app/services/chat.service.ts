import { Injectable } from '@angular/core';
import {ApolloService} from './apollo.service';
import {Apollo, gql} from 'apollo-angular';
import {Query} from '../models/query';
import {ObservableInput} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private apollo: Apollo
  ) { }

  newMessageAdded(): any{
    return this.apollo.subscribe({
      query: gql `
      subscription newMessageAdded{
  newMessageAdded{
    chatId,
    text,
    senderId
  }
}
      `
    });
  }

  addMessage(receiveId, text): any{
    return this.apollo.mutate({
      mutation: gql `
      mutation addMessage($receiveId: Int! $text: String!){
  addMessage(receiverId: $receiveId, text: $text){
    chatId,
    text
  }
}
      `,
      variables : {
        receiveId: receiveId,
        text: text,
      }
    });
  }

  getChat(receiverId): any {
    return this.apollo.watchQuery({
      query: gql `
      query getChat($receiverId: Int!){
  getChat(receiverId: $receiverId){
    chatId,
      text,
      receiver{
      userID,
        userName,
    },
    sender{
      userID,
        userName
    }
  }
  }
      `,
      variables: {
        receiverId: receiverId,
      }
    });
  }

}
