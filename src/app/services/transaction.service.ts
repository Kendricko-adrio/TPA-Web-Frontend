import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private apollo: Apollo
  ) {
  }

  // userID int, recepientID int, total int, paymentTypeID int, transactionDetail []int
  insertTransaction(userId, recepientId, total, paymentTypeId, transactionDetail): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation insertTransaction($userId: Int! $recepientId: Int! $total: Int! $paymentId: Int! $transactionDetail: [Int!]!){
  insertTransaction(userId: $userId, recepientId: $recepientId,total: $total, paymentTypeId: $paymentId, transactionDetail: $transactionDetail){
    transactionId,
    transactionDetail{
      GameId
    }
  }
}
      `,
      variables: {
        userId: userId,
        recepientId: recepientId,
        total: total,
        paymentId: paymentTypeId,
        transactionDetail: transactionDetail
      }
    });
  }

  getAllPaymentType(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getAllPaymentType{
  getAllPaymentType{
    typeId,
    typeName
  }
}
      `
    });
  }


}
