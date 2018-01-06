import { h } from 'hyperapp'
import s from './index.styl'
import NoteList from './components/NoteList'

export default ({ state, actions }) =>
  <div class={s.notelist_root}>
    <div class={s.header}>
      <button class={s.createbutton}>
        create
      </button>
    </div>
    <div class={s.notelist}>
      {console.log(state.notes)}
      <NoteList notes={state.notes} folderId={state.folderId} />
    </div>
  </div>
