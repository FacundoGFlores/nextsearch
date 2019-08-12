import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import UsersSearch from "../../queries/users";
import SearchProvider from "../providers/Search";

const mockReady = [
  {
    request: {
      query: UsersSearch,
      variables: {
        query: "foo",
        before: null,
        after: null
      }
    },
    result: {
      data: {
        search: {
          userCount: 50,
          edges: [
            {
              node: {
                avatarUrl:
                  "https://avatars0.githubusercontent.com/u/5167196?v=4",
                bio: "",
                followers: {
                  totalCount: 9
                },
                starredRepositories: {
                  totalCount: 6
                },
                name: "Facundo Flores",
                url: "https://github.com/FacundoGFlores"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars1.githubusercontent.com/u/5125169?v=4",
                bio: "Increíble, pero me lo comí todo.",
                followers: {
                  totalCount: 20
                },
                starredRepositories: {
                  totalCount: 6
                },
                name: "Facundo Greco Zubiarraín",
                url: "https://github.com/facundogz"
              }
            },
            {
              node: {
                avatarUrl:
                  "https://avatars3.githubusercontent.com/u/33498881?v=4",
                bio: "",
                followers: {
                  totalCount: 4
                },
                starredRepositories: {
                  totalCount: 4
                },
                name: null,
                url: "https://github.com/facundogaragorri"
              }
            }
          ],
          pageInfo: {
            startCursor: "Y3Vyc29yOjE=",
            endCursor: "Y3Vyc29yOjM=",
            hasPreviousPage: false,
            hasNextPage: true
          }
        }
      }
    }
  }
];

export const mockError = [
  {
    request: {
      query: UsersSearch,
      variables: {
        query: "foo",
        before: null,
        after: null
      }
    },
    error: new Error("aw shucks")
  }
];

type SuccessResponse = typeof mockReady;
type ErrorResponse = typeof mockError;

interface Props {
  mocks?: SuccessResponse | ErrorResponse;
}

const SearchUserProvider: React.SFC<Props> = ({
  mocks = mockReady,
  children
}) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <SearchProvider>{children}</SearchProvider>
  </MockedProvider>
);

export default SearchUserProvider;
