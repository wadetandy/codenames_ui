/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CodenamesTeam, CodenamesWordOwner } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_codenamesGame_wordList {
  __typename: "CodenamesWord";
  word: string;
  owner: CodenamesWordOwner;
}

export interface GetGame_codenamesGame {
  __typename: "CodenamesGame";
  id: string;
  firstMove: CodenamesTeam;
  nextMove: CodenamesTeam;
  wordList: GetGame_codenamesGame_wordList[];
}

export interface GetGame {
  /**
   * Find a specific game instance by ID
   */
  codenamesGame: GetGame_codenamesGame;
}

export interface GetGameVariables {
  id: string;
}
