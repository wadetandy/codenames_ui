import React, {
} from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import GameBoard from './CodenamesGame/GameBoard';

import getGame from '../graphql/queries/getGame'
import { GetGame } from '../graphql/queries/types/GetGame'

export default function CodenamesGame() {
  const { id } = useParams()

  const { loading, data } = useQuery<GetGame>(getGame, {
    variables: { id }
  })

  if (loading || !data) return "Loading..."

  return (
    <GameBoard wordList={ data.codenamesGame.wordList }/>
  )
}