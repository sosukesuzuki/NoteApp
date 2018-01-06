import { h } from 'hyperapp'
import s from './index.styl'
import FolderList from './components/FolderList'
import AddFolderButton from './components/AddFolderButton'

export default ({folders, folderId, actions}) =>
  <div class={s.sidenav_root}>
    <div class={s.folders}>
      <p>Folders</p>
      <AddFolderButton toggle={actions.toggleCreateFolderModal} />
    </div>
    <FolderList folderId={folderId} folders={folders} setFolderId={actions.setFolderId} />
  </div>
