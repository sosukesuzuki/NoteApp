import { h } from 'hyperapp'
import s from './NoNote.styl'

const handleOnClick = (createNote, folderId, cmInstance) => {
  createNote(folderId)
  cmInstance.refresh()
}

export default ({folderName, createNote, folderId, cmInstance}) =>
  <div class={s.nonote_root}>
    <p>{folderName} hasn't a note!</p>
    <p>Let's create a new note!</p>
    <button onclick={() => handleOnClick(createNote, folderId, cmInstance)}>Create</button>
  </div>
