import React, {
} from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GameBoard from './CodenamesGame/GameBoard';

const GET_GAME = gql`
  query LookupGame($id: ID!) {
    game(id: $id) {
      id
      firstMove
      nextMove
      wordList {
        word
        owner
      }
    }
  }
`

export default function CodenamesGame() {
  const { id } = useParams()

  const { loading, data } = useQuery(GET_GAME, {
    variables: { id }
  })

  if (loading) return "Loading..."

  return (
    <GameBoard wordList={ data.game.wordList }/>
  )
}