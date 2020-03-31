/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSession
// ====================================================

export interface CreateSession_createSession_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface CreateSession_createSession {
  __typename: "CreateSessionPayload";
  user: CreateSession_createSession_user;
}

export interface CreateSession {
  /**
   * Creates user session
   */
  createSession: CreateSession_createSession | null;
}

export interface CreateSessionVariables {
  name: string;
}
