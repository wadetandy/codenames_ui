/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CodenamesTeam, CodenamesWordOwner } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: FindGame
// ====================================================

export interface FindGame_codenamesGame_wordList {
  __typename: "CodenamesWord";
  word: string;
  owner: CodenamesWordOwner;
}

export interface FindGame_codenamesGame {
  __typename: "CodenamesGame";
  id: string;
  firstMove: CodenamesTeam;
  nextMove: CodenamesTeam;
  wordList: FindGame_codenamesGame_wordList[];
}

export interface FindGame {
  /**
   * Find a specific game instance by ID
   */
  codenamesGame: FindGame_codenamesGame;
}

export interface FindGameVariables {
  id: string;
}
