import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerConcept = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Concept, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parents?: (string | null)[] | null;
  readonly children?: (string | null)[] | null;
  readonly name: string;
  readonly description: string;
  readonly altNames?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConcept = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Concept, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parents?: (string | null)[] | null;
  readonly children?: (string | null)[] | null;
  readonly name: string;
  readonly description: string;
  readonly altNames?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Concept = LazyLoading extends LazyLoadingDisabled ? EagerConcept : LazyConcept

export declare const Concept: (new (init: ModelInit<Concept>) => Concept) & {
  copyOf(source: Concept, mutator: (draft: MutableModel<Concept>) => MutableModel<Concept> | void): Concept;
}