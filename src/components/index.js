import { h } from 'hyperapp'
import s from './index.styl'
import SideNav from './SideNav'

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) =>
  <div class={s.root}>
    <SideNav folders={state.folders} />
  </div>
