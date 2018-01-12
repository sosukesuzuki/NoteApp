import { h } from 'hyperapp'
import s from './MarkdownEditor.styl'
import CodeEditor from './CodeEditor'

const handleOnChange = (e, updateNoteContent) => {
  updateNoteContent(e)
}

export default ({notes, noteId, updateNoteContent, setCodeMirror, cmInstance}) =>
  <div class={s.root}>
    <CodeEditor class={s.editor}
      notes={notes}
      noteId={noteId}
      setCodeMirror={setCodeMirror}
      cmInstance={cmInstance}
      onChange={(e) => handleOnChange(e, updateNoteContent)} />
  </div>
