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

const handleUpdateFolderModalContent = (text, update) => {
  update(text)
}

export default ({state, actions}) =>
  <div class={s.root} style={acceptStyle(state.isCreateFolderModalShow)}>
    <div class={s.modal}>
      <button onclick={() => handleCloseButtonClick(actions.toggleCreateFolderModal)}>Close</button>
      <p>create new folder</p>
      <input type='text' value={state.folderModalContent}
        oninput={(e) => handleUpdateFolderModalContent(e.target.value, actions.updateFolderModalInput)} />
      <button onclick={handleCreateButtonClick}>Create</button>
    </div>
  </div>
