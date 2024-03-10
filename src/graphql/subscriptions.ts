/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateConcept = /* GraphQL */ `subscription OnCreateConcept($filter: ModelSubscriptionConceptFilterInput) {
  onCreateConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConceptSubscriptionVariables,
  APITypes.OnCreateConceptSubscription
>;
export const onUpdateConcept = /* GraphQL */ `subscription OnUpdateConcept($filter: ModelSubscriptionConceptFilterInput) {
  onUpdateConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConceptSubscriptionVariables,
  APITypes.OnUpdateConceptSubscription
>;
export const onDeleteConcept = /* GraphQL */ `subscription OnDeleteConcept($filter: ModelSubscriptionConceptFilterInput) {
  onDeleteConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConceptSubscriptionVariables,
  APITypes.OnDeleteConceptSubscription
>;
