import { h } from 'hyperapp'
import s from './index.styl'
import SideNav from './SideNav'
import NoteList from './NoteList'
import NoteDetail from './NoteDetail'
import CreateFolderModal from './Modals/CreateFolderModal'

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) =>
  <div class={s.root}>
    <div class={s.main}>
      <SideNav {...state} {...actions} />
      <NoteList state={state} actions={actions} />
      <NoteDetail state={state} actions={actions} />
    </div>
    <div>
      <CreateFolderModal actions={actions} state={state} />
    </div>
  </div>
