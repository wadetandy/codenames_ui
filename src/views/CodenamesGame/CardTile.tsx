import React from 'react'
import { Word } from './GameBoard'

type CardTileProps = {
  className?: string
  word: Word,
  onClick: (w: Word) => void
}

export default function CardTile({ word, onClick, className = "" }: CardTileProps) {
  let buttonStyles: string[] = []

  switch(word.owner) {
    case 'RED':
      buttonStyles = ['bg-red-600', 'hover:bg-red-500', 'text-gray-100']
      break;
    case 'BLUE':
      buttonStyles = ['bg-blue-600', 'hover:bg-blue-500', 'text-gray-100']
      break;
    case 'NEUTRAL':
      buttonStyles = ['bg-yellow-600', 'hover:bg-yellow-500', 'text-gray-900']
      break;
    case 'ASSASSIN':
      buttonStyles = ['bg-gray-900', 'hover:bg-gray-800', 'text-gray-100']
      break;
    case 'UNKNOWN':
      buttonStyles = ['bg-gray-300', 'hover:bg-gray-400', 'text-gray-900']
  }
  return (
    <button
      className={`${className} ${buttonStyles.join(' ')} p-4 b-4 rounded`}
      style={
        {
          width: "18%",
          margin: "1%",
          height: "18%",
        }
      }
      onClick={ () => onClick(word) }
    >
      { word.word }
    </button>
  )
}

