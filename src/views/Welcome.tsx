import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useState
} from 'react'

import { useHistory } from 'react-router-dom'

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_CODENAMES_GAME = gql`
  mutation CreateCodenamesGame {
    createCodenamesGame {
      success
      errors
      game {
        id
      }
    }
  }
`;

export default function Welcome() {
  const history = useHistory()
  const [view, setView] = useState('default' as 'default' | 'creating' | 'join')
  const [gameId, setGameId] = useState("")

  const [createGame] = useMutation(CREATE_CODENAMES_GAME);

  async function createNewGame() {
    setView('creating')

    try {
      let { data } = await createGame()

      let response = data.createCodenamesGame
      if (response.success) {
        history.push(`/codenames/${response.game.id}`)
      } else {
        console.error('FAILED', response.errors)
      }
    } catch(e) {
      console.error(e)
    }
  }

  function wrap( content: JSX.Element) {
    return (
      <div>
        <div className="pb-4">
          <h1>Welcome to Codewords!</h1>
        </div>

        { content }
      </div>
    )
  }

  switch(view) {
    case 'default':
      return wrap(
        <div className="flex flex-row justify-around">
          <ActionButton onClick={ createNewGame }>
            Create a new game
          </ActionButton>
          <ActionButton onClick={() => setView('join')}>
            Join an existing game
          </ActionButton>
        </div>
      )
    case 'creating':
      return wrap(
        <div>
          <h2>Creating game...</h2>
        </div>
      )
    case 'join':
      return wrap(
        <div>
          <input
            className="text-lg leading-normal p-6 text-gray-800 rounded"
            placeholder="Enter game ID"
            value={gameId}
            onInput={(event) => setGameId((event.target as any).value)}
          />
          <ActionButton
            disabled={!gameId}
            onClick={() => history.push(`/codenames/${gameId}`)}>
            Join Game
          </ActionButton>
        </div>
      )
  }
}

function ActionButton({
  children,
  ...buttonProps
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className="p-6 m-4 bg-gray-200 text-gray-600 rounded" {...buttonProps}>
      { children }
    </button>
  )
}