import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  // uri: "https://projects.theglobalwebdev.com/brainsapte/graphql",
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}`,
});

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
