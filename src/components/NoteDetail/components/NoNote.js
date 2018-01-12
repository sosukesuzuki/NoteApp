import { h } from 'hyperapp'
import s from './NoNote.styl'

const handleOnClick = (createNewNote, folderId) => {
  createNewNote(folderId)
}

export default ({folderName, createNewNote, folderId}) =>
  <div class={s.nonote_root}>
    <p>{folderName} hasn't a note!</p>
    <p>Let's create a note!</p>
    <button onclick={() => handleOnClick(createNewNote, folderId)}>Create</button>
  </div>
