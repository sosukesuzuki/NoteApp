import { h } from 'hyperapp'
import s from './FolderList.styl'

export default ({folders}) =>
  <div class={s.root}>
    {folders.map((folder) => {
      return <button class={s.folder}>
        {folder.name}
      </button>
    })}
  </div>
