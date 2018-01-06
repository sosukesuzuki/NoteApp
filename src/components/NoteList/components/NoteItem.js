import { h } from 'hyperapp'
import s from './NoteItem.styl'

const handleOnClick = () => {
  console.log('onclick')
}

export default ({ note }) =>
  <button onclick={handleOnClick} class={s.root}>
    {note.title}
  </button>
