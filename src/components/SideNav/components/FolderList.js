import { h } from 'hyperapp'
import s from './FolderList.styl'

export default ({folders}) =>
  <div class={s.root}>
    {console.log(folders)}
    {folders.map((folder) => {
      return <button class={s.folder}>
        <i class='fa fa-folder-o' aria-hidden style={{color: folder.color}} />
        {folder.name}
      </button>
    })}
  </div>
