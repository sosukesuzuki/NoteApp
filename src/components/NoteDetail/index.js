import { h } from 'hyperapp'
import s from './index.styl'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import getCurrentNoteContent from '../../lib/getCurrentNoteContent'

const handleOnContextMenu = (e, mode, toggleMode) => {
  e.preventDefault()
  const codemirror = document.getElementsByClassName('CodeMirror')[0]
  mode === 'EDITOR'
    ? codemirror.style.display = 'none'
    : codemirror.style.display = 'block'
  toggleMode()
}

export default ({state, actions}) =>
  <div class={s.notedetail_root}
    oncontextmenu={(e) => handleOnContextMenu(e, state.mode, actions.toggleMode)}>
    <MarkdownPreview
      value={getCurrentNoteContent(state.notes, state.noteId)} {...state} />
    <MarkdownEditor
      {...state} {...actions} />
  </div>
