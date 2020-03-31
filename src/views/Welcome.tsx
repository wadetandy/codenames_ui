import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { useMutation } from '@apollo/react-hooks';

import createCodenamesGame from '../graphql/mutations/createCodenamesGame'
import { CreateCodenamesGame } from '../graphql/mutations/types/CreateCodenamesGame'
import ActionButton from '../components/ActionButton';

export default function Welcome() {
  const history = useHistory()
  const [view, setView] = useState('default' as 'default' | 'creating' | 'join')
  const [gameId, setGameId] = useState("")

  const [createGame] = useMutation<CreateCodenamesGame>(createCodenamesGame);

  async function createNewGame() {
    setView('creating')

    try {
      let { data } = await createGame()

      if (!data || !data.createCodenamesGame) return

      let response = data.createCodenamesGame
      if (response.success) {
        let game = response.game
        if (!game) { return }

        history.push(`/codenames/${game.id}`)
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
            onChange={(event) => setGameId(event.target.value)}
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