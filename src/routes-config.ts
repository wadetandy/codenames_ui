import {
  RouteProps
} from 'react-router-dom'

import Welcome from './views/Welcome'
import CodenamesGame from './views/CodenamesGame'

export default [
  {
    path: '/',
    exact: true,
    component: Welcome
  },
  {
    path: '/codenames/:id',
    component: CodenamesGame
  },
] as RouteProps[]