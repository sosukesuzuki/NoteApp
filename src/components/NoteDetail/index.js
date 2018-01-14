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

export default ({mode, toggleMode, cmInstance, notes, folderId, noteId, createNote, folders, updateNoteContent, setCodeMirror}) =>
  <div class={s.notedetail_root}
    oncontextmenu={(e) => handleOnContextMenu(e, mode, toggleMode, cmInstance)}>
    <div
      class={getCurrentNotes(notes, folderId).length !== 0
        ? s.main
        : s.nonactive_main}>
      <MarkdownPreview
        value={getCurrentNoteContent(notes, noteId)}
        noteId={noteId} />
      <MarkdownEditor 
        notes={notes}
        noteId={noteId}
        updateNoteContent={updateNoteContent}
        setCodeMirror={setCodeMirror}
        cmInstance={cmInstance} />
    </div>
    <div
      class={getCurrentNotes(notes, folderId).length === 0
        ? s.main
        : s.nonactive_main}>
      <NoNote
        folderId={folderId}
        createNote={createNote}
        cmInstance={cmInstance}
        folderName={getCurrentFolderName(folders, folderId)} />
    </div>
  </div>
