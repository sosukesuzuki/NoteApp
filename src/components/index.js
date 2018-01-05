import { h } from 'hyperapp'
import s from './index.styl'
import SideNav from './SideNav'
import CreateFolderModal from './Modals/CreateFolderModal'

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) =>
  <div class={s.root}>
    <div>
      <SideNav folders={state.folders} folderId={state.folderId} actions={actions} />
    </div>
    <div>
      <CreateFolderModal actions={actions} state={state} />
    </div>
  </div>
