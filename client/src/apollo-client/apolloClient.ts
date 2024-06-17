import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// for public apis
export const publicClient = new ApolloClient({
  uri: `${import.meta.env.VITE_APP_API_URL}/`,
  cache: new InMemoryCache(),
});

// for private apis
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = user.token;


  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const privateClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});