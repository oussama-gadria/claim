import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = new HttpLink({
  uri: "https://claim.dodasoft.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const newHeaders = {
    ...headers,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
  };

  return {
    headers: newHeaders,
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink, authLink]),
  cache: new InMemoryCache(),
});

export default client;
