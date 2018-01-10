import { h } from 'hyperapp'
import codemirror from 'codemirror'
import getCurrentNoteContent from '../../../lib/getCurrentNoteContent'
require('codemirror/lib/codemirror.css')
require('codemirror/mode/markdown/markdown')

const handleOnCreate = (e, options, onChange, setCodeMirror) => {
  const cm = codemirror.fromTextArea(e, options)
  cm.on('change', () => onChange(cm.getValue()))
  setCodeMirror(cm)
}

const handleOnUpdate = (e, oldProps, notes, noteId, cmInstance) => {
  if (noteId === oldProps.noteId || cmInstance === null) return
  cmInstance.setValue(getCurrentNoteContent(notes, noteId))
}

export default ({notes, noteId, options, onChange, setCodeMirror, cmInstance}) => {
  return (
    <div noteId={noteId}
      onupdate={(e, oldProps) => handleOnUpdate(e, oldProps, notes, noteId, cmInstance)}>
      <textarea
        defaultValue={getCurrentNoteContent(notes, noteId)}
        oncreate={e => handleOnCreate(e, options, onChange, setCodeMirror, cmInstance)} />
    </div>
  )
}
