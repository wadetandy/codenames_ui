import React from 'react'
import CardTile from './CardTile'


export type GameBoardProps = {
  wordList: Record<string, any>[]
  onWordSelect?: (word: any) => void
}

export default function GameBoard({ wordList }: GameBoardProps) {
  return (
    <div>
      { wordList.map((word) => <CardTile word={word} onClick={() => }/>) }
    </div>
  )

}