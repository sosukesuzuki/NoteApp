import { h } from 'hyperapp'
import s from './MarkdownEditor.styl'
import CodeEditor from './CodeEditor'

const options = {
  theme: 'default',
  lineNumbers: true,
  mode: 'markdown',
  autoRefresh: true
}

const handleOnChange = (e, updateNoteContent) => {
  updateNoteContent(e)
}

export default ({notes, noteId, updateNoteContent, setCodeMirror, cmInstance}) =>
  <div class={s.root}>
    <CodeEditor class={s.editor}
      notes={notes}
      noteId={noteId}
      options={options}
      setCodeMirror={setCodeMirror}
      cmInstance={cmInstance}
      onChange={(e) => handleOnChange(e, updateNoteContent)} />
  </div>
