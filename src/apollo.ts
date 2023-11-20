import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://staging3.api-next.fielda.com/v1/user/login/',
  cache: new InMemoryCache(),
});

export default client;