import { h } from 'hyperapp'
import s from './FolderList.styl'

const handleOnClick = (setFolderId, folderId) => {
  setFolderId(folderId)
}

export default ({folders, folderId, setFolderId}) =>
  <div class={s.root}>
    {console.log(folders)}
    {folders.map((folder) => {
      return <button class={folderId === folder.id ? s.activefolder : s.folder}
        onclick={() => handleOnClick(setFolderId, folder.id)}>
        <i class={folderId === folder.id ? 'fa fa-folder-open-o' : 'fa fa-folder-o'}
          aria-hidden
          style={{color: folder.color}} />
        {folder.name}
      </button>
    })}
  </div>
