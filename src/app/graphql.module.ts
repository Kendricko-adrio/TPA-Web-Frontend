import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, split} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';

// const uri = 'http://localhost:2000/query'; // <-- add the URL of the GraphQL server here
// const uria = 'ws://localhost:2000/query'; // <-- add the URL of the GraphQL server here
const uri = 'https://staem-kn.herokuapp.com/query'; // <-- add the URL of the GraphQL server here
const uria = 'ws://staem-kn.herokuapp.com/query'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
// Create an http link:
  const http = httpLink.create({
    uri,
    withCredentials: true
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: uria,
    options: {
      reconnect: true,
    },
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({query}) => {
      // @ts-ignore
      const {kind, operation} = getMainDefinition(query);
      return (
        kind === 'OperationDefinition' && operation === 'subscription'
      );
    },
    ws,
    http,
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
