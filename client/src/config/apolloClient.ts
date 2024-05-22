import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClientApi = new ApolloClient({
  uri: `${import.meta.env.VITE_APP_API_URL}/`,
  cache: new InMemoryCache(),
});