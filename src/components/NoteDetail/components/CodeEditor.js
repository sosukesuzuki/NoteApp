import { h } from 'hyperapp'
import codemirror from 'codemirror'
require('codemirror/lib/codemirror.css')
require('codemirror/mode/markdown/markdown')

const handleOnCreate = (e, options, onChange, setCodeMirror) => {
  const cm = codemirror.fromTextArea(e, options)
  cm.on('change', () => onChange(cm.getValue()))
  setCodeMirror(cm)
}

const handleOnUpdate = (e, oldProps, notes, noteId, cmInstance) => {
  if (noteId === oldProps.noteId) return
  cmInstance.setValue(getCurrentNoteContent(notes, noteId))
}

const getCurrentNoteContent = (notes, noteId) => {
  return notes.filter(note => {
    return note.id === noteId
  })[0].content
}

export default ({notes, noteId, options, onChange, setCodeMirror, cmInstance}) => {
  return (
    <div noteId={noteId}
      onupdate={(e, oldProps) => handleOnUpdate(e, oldProps, notes, noteId, cmInstance)}>
      <textarea
        defaultValue={getCurrentNoteContent(notes, noteId)}
        oncreate={e => handleOnCreate(e, options, onChange, setCodeMirror)} />
    </div>
  )
}
