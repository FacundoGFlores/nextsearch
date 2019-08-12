import ApolloClient from "apollo-boost";
import fetch from "node-fetch";

const BASE_URL = "https://api.github.com/graphql";

const graphqlClient = new ApolloClient({
  fetch,
  uri: BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_SEARCH_GITHUB_API_KEY}`
  }
});

export default graphqlClient;
