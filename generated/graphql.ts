import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LinkSchema = {
  __typename?: 'LinkSchema';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  completeLink: Scalars['String'];
  shortLink: Scalars['String'];
  views: Scalars['Int'];
  userId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateLink: LinkSchema;
};


export type MutationCreateLinkArgs = {
  completeLink: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ello: Scalars['String'];
  AllLinks?: Maybe<Array<LinkSchema>>;
};

export type CreateNewLinkMutationVariables = Exact<{
  completeLink: Scalars['String'];
}>;


export type CreateNewLinkMutation = (
  { __typename?: 'Mutation' }
  & { CreateLink: (
    { __typename?: 'LinkSchema' }
    & Pick<LinkSchema, 'id' | 'createdAt' | 'updatedAt' | 'shortLink'>
  ) }
);


export const CreateNewLinkDocument = gql`
    mutation CreateNewLink($completeLink: String!) {
  CreateLink(completeLink: $completeLink) {
    id
    createdAt
    updatedAt
    shortLink
  }
}
    `;

export function useCreateNewLinkMutation() {
  return Urql.useMutation<CreateNewLinkMutation, CreateNewLinkMutationVariables>(CreateNewLinkDocument);
};