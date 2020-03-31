/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_viewer {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetCurrentUser {
  /**
   * Show the currently authenticated user
   */
  viewer: GetCurrentUser_viewer | null;
}
