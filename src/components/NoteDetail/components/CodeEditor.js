import { h } from 'hyperapp'
import codemirror from 'codemirror'
import getCurrentNoteContent from '../../../lib/getCurrentNoteContent'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/edit/continuelist'

const options = {
  theme: 'default',
  lineNumbers: true,
  mode: 'markdown',
  extraKeys: {
    'Enter': 'newlineAndIndentContinueMarkdownList'
  }
}

const handleOnCreate = (e, options, onChange, setCodeMirror) => {
  const cm = codemirror.fromTextArea(e, options)
  cm.on('change', () => onChange(cm.getValue()))
  setCodeMirror(cm)
}

const handleOnUpdate = (e, oldProps, notes, noteId, cmInstance) => {
  if (noteId === oldProps.noteId || cmInstance === null) return
  cmInstance.setValue(getCurrentNoteContent(notes, noteId))
  cmInstance.focus()
}

export default ({notes, noteId, onChange, setCodeMirror, cmInstance}) => {
  return (
    <div noteId={noteId}
      onupdate={(e, oldProps) => handleOnUpdate(e, oldProps, notes, noteId, cmInstance)}>
      <textarea
        defaultValue={getCurrentNoteContent(notes, noteId)}
        oncreate={e => handleOnCreate(e, options, onChange, setCodeMirror, cmInstance)} />
    </div>
  )
}
