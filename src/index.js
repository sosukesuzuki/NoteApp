import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components'
import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/CodeMirror.css'

export const main = app(
  state,
  actions,
  view,
  document.body
)
