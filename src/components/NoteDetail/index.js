import { h } from 'hyperapp'
import s from './index.styl'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'
import NoNote from './components/NoNote'
import getCurrentNoteContent from '../../lib/getCurrentNoteContent'
import getCurrentFolderName from '../../lib/getCurrentFolderName'
import getCurrentNotes from '../../lib/getCurrentNotes'

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
    <div
      class={getCurrentNotes(state.notes, state.folderId).length !== 0
        ? s.main
        : s.nonactive_main}>
      <MarkdownPreview
        value={getCurrentNoteContent(state.notes, state.noteId)} {...state} />
      <MarkdownEditor
        {...state} {...actions} />
    </div>
    <div
      class={getCurrentNotes(state.notes, state.folderId).length === 0
        ? s.main
        : s.nonactive_main}>
      <NoNote
        folderId={state.folderId}
        createNote={actions.createNote}
        cmInstance={state.cmInstance}
        folderName={getCurrentFolderName(state.folders, state.folderId)} />
    </div>
  </div>
