import { h } from 'hyperapp'
import s from './index.styl'
import NoteList from './components/NoteList'

const handleOnClick = (folderId, createNote) => {
  createNote(folderId)
}
export default ({ notes, folderId, createNote, setNoteId, noteId }) =>
  <div class={s.notelist_root}>
    <div class={s.header}>
      <button onclick={() => handleOnClick(folderId, createNote)}
        class={s.createbutton}>
        <i class='fa fa-pencil-square-o' aria-hidden />
      </button>
    </div>
    <div class={s.notelist}>
      <NoteList notes={notes}
        folderId={folderId}
        setNoteId={setNoteId}
        noteId={noteId} />
    </div>
  </div>
