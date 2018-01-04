import { h } from 'hyperapp'
import s from './CreateFolderModal.styl'

const acceptStyle = (cond) => {
  if (cond) {
    return {
      display: 'block'
    }
  } else {
    return {
      display: 'none'
    }
  }
}

const handleCreateButtonClick = () => {
  console.log('handleCreateButtonClick')
}

const handleCloseButtonClick = (toggle) => {
  toggle()
}

export default ({toggle, isCreateFolderModalShow}) =>
  <div class={s.root} style={acceptStyle(isCreateFolderModalShow)}>
    <div class={s.modal}>
      <button onclick={() => handleCloseButtonClick(toggle)}>Close</button>
      <p>create new folder</p>
      <input type='text' />
      <button onclick={handleCreateButtonClick}>Create</button>
    </div>
  </div>
