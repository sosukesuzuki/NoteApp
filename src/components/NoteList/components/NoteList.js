import { h } from 'hyperapp'
import s from './NoteList.styl'
import NoteItem from './NoteItem.js'

export default ({ notes, folderId }) =>
  <div class={s.root}>
    {console.log(notes)}
    {notes.filter(note => {
      return note.folderId === folderId
    }).map(note => {
      return <NoteItem note={note} />
    })}
  </div>
