import React from 'react'
import CardTile from './CardTile'
import { CodenamesWordOwner } from '../../graphql/types/graphql-global-types'

export type Word = {
  word: string
  owner: CodenamesWordOwner
}

export type GameBoardProps = {
  wordList: Word[]
  onWordSelect?: (word: Word) => void
}

export default function GameBoard({ wordList }: GameBoardProps) {
  return (
    <div className="flex justify-between flex-wrap">
      { wordList.map((word) => <CardTile className="w-1/5" word={word} onClick={() => {}}/>) }
    </div>
  )

}