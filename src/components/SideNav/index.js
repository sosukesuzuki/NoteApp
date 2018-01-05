import { h } from 'hyperapp'
import s from './index.styl'
import FolderList from './components/FolderList'
import AddFolderButton from './components/AddFolderButton'

export default ({folders, actions}) =>
  <div class={s.root}>
    <div class={s.folders}>
      <p>Folders</p>
      <AddFolderButton toggle={actions.toggleCreateFolderModal} />
    </div>
    <FolderList folders={folders} />
  </div>
