import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Query} from '../models/query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private apollo: Apollo,
  ) {
  }

  getUnsuspendRequest(userId): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query GetUnsuspendByUserID($userId: Int!){
  getUnsuspendByUserId(userId: $userId){
    requestId,
    suspendedTypeId,
    suspendedUser{
      userName,
    }
    suspendedType{
      typeName
    }
  }
}
`, variables: {
        userId: userId
      }
    });
  }

  acceptRequest(requestId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation acceptRequest($requestId: Int!){
  acceptRequest(requestId: $requestId){
    requestId
  }
}
      `,
      variables: {
        requestId: requestId
      }
    });
  }

  declineRequest(requestId): any {
    return this.apollo.mutate({
      mutation: gql`
      mutation rejectRequest($requestID: Int!){
  rejectRequest(requestId: $requestID){
    requestId
  }
}
      `,
      variables: {
        requestID: requestId
      }
    });
  }

  getReportByReported(id): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
      query getReportByReportedId($id: Int!){
  getReportByReported(reportedId: $id){
    reporter{
      userName,
      PhotoUrl
    }
    reportDescription
  }
}
      `,
      variables: {
        id: id
      }
    });
  }
}
