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

const handleCreateButtonClick = (name, createFolder, toggle) => {
  if (name !== '') {
    toggle()
    createFolder(name, 'black')
  } else {
    alert('please enter new folder name.')
  }
}

const handleCloseButtonClick = (toggle) => {
  toggle()
}

const handleUpdateFolderModalContent = (text, update) => {
  update(text)
}

export default ({state, actions}) =>
  <div class={s.root} style={acceptStyle(state.isCreateFolderModalShow)}>
    <button class={s.closebutton}
      onclick={() => handleCloseButtonClick(actions.toggleCreateFolderModal)}>
      <i class='fa fa-times' aria-hidden />
    </button>
    <p class={s.title}>create new folder</p>
    <input class={s.input} type='text' value={state.folderModalContent}
      oninput={(e) => handleUpdateFolderModalContent(e.target.value, actions.updateFolderModalInput)} />
    <button class={s.createbutton}
      onclick={() => handleCreateButtonClick(state.folderModalContent, actions.createFolder, actions.toggleCreateFolderModal)}>
      Create
    </button>
  </div>
