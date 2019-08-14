import { gql } from "apollo-boost";

const UsersQuery = gql(`
query UsersSearch($query: String!, $after: String) { 
	search(query: $query, first: 5, after: $after, type: USER) {
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

export default UsersQuery;
