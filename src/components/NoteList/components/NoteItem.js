import { h } from 'hyperapp'
import s from './NoteItem.styl'

const handleOnClick = (noteId, setNoteId) => {
  setNoteId(noteId)
}

export default ({ note, noteId, setNoteId }) =>
  <button onclick={() => handleOnClick(note.id, setNoteId)}
    class={noteId === note.id ? s.activeroot : s.root}>
    <i class='fa fa-sticky-note-o' aria-hidden />
    {note.title}
  </button>
