import { h } from 'hyperapp'
import s from './NoteList.styl'
import NoteItem from './NoteItem.js'

export default ({ notes, folderId, noteId, setNoteId }) =>
  <div class={s.root}>
    {console.log(notes)}
    {notes.filter(note => {
      return note.folderId === folderId
    }).map(note => {
      return <NoteItem setNoteId={setNoteId} note={note} noteId={noteId} />
    })}
  </div>
