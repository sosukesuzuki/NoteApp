import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/Counter'
import 'normalize.css'

export const main = app(
  state,
  actions,
  view,
  document.body
)
