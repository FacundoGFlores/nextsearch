import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import SearchProvider from "../providers/Search";
import { UsersResponses } from "./__fixtures__/usersResponse";

type SuccessResponse = typeof UsersResponses;

interface Props {
  mocks?: SuccessResponse;
}

const SearchUserProvider: React.SFC<Props> = ({
  mocks = UsersResponses,
  children
}) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <SearchProvider>{children}</SearchProvider>
  </MockedProvider>
);

export default SearchUserProvider;
