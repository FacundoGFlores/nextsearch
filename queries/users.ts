import { gql } from "apollo-boost";

const UsersSearch = gql(`
query UsersSearch($query: String!, $before: String, $after: String) { 
	search(query: $query, first: 5, before: $before, after: $after, type: USER) {
    userCount
    edges {
      node {
        ... on User {
        	avatarUrl
          bio
          followers {
            totalCount
          }
          starredRepositories {
            totalCount
          }
          name
          url
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  }
}
`);

export default UsersSearch;
