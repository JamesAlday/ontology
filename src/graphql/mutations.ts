/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createConcept = /* GraphQL */ `mutation CreateConcept(
  $input: CreateConceptInput!
  $condition: ModelConceptConditionInput
) {
  createConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateConceptMutationVariables,
  APITypes.CreateConceptMutation
>;
export const updateConcept = /* GraphQL */ `mutation UpdateConcept(
  $input: UpdateConceptInput!
  $condition: ModelConceptConditionInput
) {
  updateConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateConceptMutationVariables,
  APITypes.UpdateConceptMutation
>;
export const deleteConcept = /* GraphQL */ `mutation DeleteConcept(
  $input: DeleteConceptInput!
  $condition: ModelConceptConditionInput
) {
  deleteConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteConceptMutationVariables,
  APITypes.DeleteConceptMutation
>;
