/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConceptInput = {
  id?: string | null,
  parents?: Array< string | null > | null,
  children?: Array< string | null > | null,
  name: string,
  description: string,
  altNames?: Array< string > | null,
  _version?: number | null,
};

export type ModelConceptConditionInput = {
  parents?: ModelIDInput | null,
  children?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  altNames?: ModelStringInput | null,
  and?: Array< ModelConceptConditionInput | null > | null,
  or?: Array< ModelConceptConditionInput | null > | null,
  not?: ModelConceptConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Concept = {
  __typename: "Concept",
  id: string,
  parents?: Array< string | null > | null,
  children?: Array< string | null > | null,
  name: string,
  description: string,
  altNames?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConceptInput = {
  id: string,
  parents?: Array< string | null > | null,
  children?: Array< string | null > | null,
  name?: string | null,
  description?: string | null,
  altNames?: Array< string > | null,
  _version?: number | null,
};

export type DeleteConceptInput = {
  id: string,
  _version?: number | null,
};

export type ModelConceptFilterInput = {
  id?: ModelIDInput | null,
  parents?: ModelIDInput | null,
  children?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  altNames?: ModelStringInput | null,
  and?: Array< ModelConceptFilterInput | null > | null,
  or?: Array< ModelConceptFilterInput | null > | null,
  not?: ModelConceptFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelConceptConnection = {
  __typename: "ModelConceptConnection",
  items:  Array<Concept | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionConceptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parents?: ModelSubscriptionIDInput | null,
  children?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  altNames?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConceptFilterInput | null > | null,
  or?: Array< ModelSubscriptionConceptFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateConceptMutationVariables = {
  input: CreateConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type CreateConceptMutation = {
  createConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateConceptMutationVariables = {
  input: UpdateConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type UpdateConceptMutation = {
  updateConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteConceptMutationVariables = {
  input: DeleteConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type DeleteConceptMutation = {
  deleteConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetConceptQueryVariables = {
  id: string,
};

export type GetConceptQuery = {
  getConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListConceptsQueryVariables = {
  filter?: ModelConceptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConceptsQuery = {
  listConcepts?:  {
    __typename: "ModelConceptConnection",
    items:  Array< {
      __typename: "Concept",
      id: string,
      parents?: Array< string | null > | null,
      children?: Array< string | null > | null,
      name: string,
      description: string,
      altNames?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConceptsQueryVariables = {
  filter?: ModelConceptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConceptsQuery = {
  syncConcepts?:  {
    __typename: "ModelConceptConnection",
    items:  Array< {
      __typename: "Concept",
      id: string,
      parents?: Array< string | null > | null,
      children?: Array< string | null > | null,
      name: string,
      description: string,
      altNames?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnCreateConceptSubscription = {
  onCreateConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnUpdateConceptSubscription = {
  onUpdateConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnDeleteConceptSubscription = {
  onDeleteConcept?:  {
    __typename: "Concept",
    id: string,
    parents?: Array< string | null > | null,
    children?: Array< string | null > | null,
    name: string,
    description: string,
    altNames?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
