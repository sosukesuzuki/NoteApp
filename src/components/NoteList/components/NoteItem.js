import { h } from 'hyperapp'
import s from './NoteItem.styl'

const handleOnClick = () => {
  console.log('onclick')
}

export default ({ note }) =>
  <button onclick={handleOnClick} class={s.root}>
    <i class='fa fa-sticky-note-o' aria-hidden />
    {note.title}
  </button>
