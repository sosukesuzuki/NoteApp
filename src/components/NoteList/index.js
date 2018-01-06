import { h } from 'hyperapp'
import s from './index.styl'
import NoteList from './components/NoteList'

const handleOnClick = (folderId, createNote) => {
  createNote(folderId)
}
export default ({ state, actions }) =>
  <div class={s.notelist_root}>
    <div class={s.header}>
      <button onclick={() => handleOnClick(state.folderId, actions.createNote)}
        class={s.createbutton}>
        <i class='fa fa-pencil-square-o' aria-hidden />
      </button>
    </div>
    <div class={s.notelist}>
      {console.log(state.notes)}
      <NoteList notes={state.notes}
        folderId={state.folderId}
        setNoteId={actions.setNoteId}
        noteId={state.noteId} />
    </div>
  </div>
