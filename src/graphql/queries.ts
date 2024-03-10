/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getConcept = /* GraphQL */ `query GetConcept($id: ID!) {
  getConcept(id: $id) {
    id
    parents
    children
    name
    description
    altNames
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConceptQueryVariables,
  APITypes.GetConceptQuery
>;
export const listConcepts = /* GraphQL */ `query ListConcepts(
  $filter: ModelConceptFilterInput
  $limit: Int
  $nextToken: String
) {
  listConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      parents
      children
      name
      description
      altNames
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConceptsQueryVariables,
  APITypes.ListConceptsQuery
>;
export const syncConcepts = /* GraphQL */ `query SyncConcepts(
  $filter: ModelConceptFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncConcepts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      parents
      children
      name
      description
      altNames
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncConceptsQueryVariables,
  APITypes.SyncConceptsQuery
>;
