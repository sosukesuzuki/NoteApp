import { h } from 'hyperapp'
import s from './AddFolderButton.styl'

const handleOnClick = () => {
  console.log('click')
}

export default () =>
  <div class={s.root}>
    <button onclick={handleOnClick}>
      <p>Add Folder</p>
    </button>
  </div>
