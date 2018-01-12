import { h } from 'hyperapp'
import s from './index.styl'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import getCurrentNoteContent from '../../lib/getCurrentNoteContent'

const handleOnContextMenu = (e, mode, toggleMode, cmInstance) => {
  e.preventDefault()
  const codemirror = document.getElementsByClassName('CodeMirror')[0]
  if (mode === 'EDITOR') {
    codemirror.style.display = 'none'
  } else {
    codemirror.style.display = 'block'
    cmInstance.refresh()
  }
  toggleMode()
}

export default ({state, actions}) =>
  <div class={s.notedetail_root}
    oncontextmenu={(e) => handleOnContextMenu(e, state.mode, actions.toggleMode, state.cmInstance)}>
    <MarkdownPreview
      value={getCurrentNoteContent(state.notes, state.noteId)} {...state} />
    <MarkdownEditor
      {...state} {...actions} />
  </div>
