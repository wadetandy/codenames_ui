import React, {
  useState,
  useEffect
} from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import createSession from '../graphql/mutations/createSession'
import getCurrentUser from '../graphql/queries/getCurrentUser'
import { CreateSession } from '../graphql/mutations/types/CreateSession';
import { GetCurrentUser } from '../graphql/queries/types/GetCurrentUser';
import Loading from '../components/Loading';
import authService, { User } from '../auth/authService';
import { Redirect } from 'react-router-dom';
import ActionButton from '../components/ActionButton';

export default function StartSession() {
  const [name, setName] = useState("")
  const [redirectPath, setRedirect] = useState(null as null | string)
  const [submit] = useMutation<CreateSession>(createSession)

  const { data, loading } = useQuery<GetCurrentUser>(getCurrentUser)

  function loginUser(user: User) {
    authService.currentUser = user
    setRedirect(authService.redirect ? authService.redirect : '/')
  }

  useEffect(() => {
    if (data?.viewer) {
      loginUser(data.viewer)
    }
  }, [data])

  if (loading) { return <Loading/> }

  if (redirectPath) {
    authService.redirect = null
    return <Redirect to={redirectPath}/>
  }

  return (
    <div>
      <input
        className="text-lg leading-normal p-6 text-gray-800 rounded"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <ActionButton
        onClick={async () => {
          let { data } = await submit({ variables: { name } })

          if (data?.createSession?.user) {
            loginUser(data.createSession.user)
          }
        }}
      >
        Sign In
      </ActionButton>
    </div>
  )
}