/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCodenamesGame
// ====================================================

export interface CreateCodenamesGame_createCodenamesGame_game {
  __typename: "CodenamesGame";
  id: string;
}

export interface CreateCodenamesGame_createCodenamesGame {
  __typename: "CreateCodenamesGamePayload";
  success: boolean;
  errors: string[];
  game: CreateCodenamesGame_createCodenamesGame_game | null;
}

export interface CreateCodenamesGame {
  /**
   * Creates a new game of Codenames
   */
  createCodenamesGame: CreateCodenamesGame_createCodenamesGame | null;
}
