import { h } from 'hyperapp'
import s from './FolderList.styl'

const handleOnClick = (setFolderId, folderId, setNoteId, notes) => {
  setFolderId(folderId)
  const currentNotes = notes.filter(note => {
    return note.folderId === folderId
  })
  const headNote = currentNotes[0] || null // -1 means folder has no note
  if (headNote !== null) setNoteId(headNote.id)
}

export default ({folders, folderId, setFolderId, setNoteId, notes}) =>
  <div class={s.root}>
    {folders.map((folder) => {
      return <button class={folderId === folder.id ? s.activefolder : s.folder}
        onclick={() => handleOnClick(setFolderId, folder.id, setNoteId, notes)}>
        <i class={folderId === folder.id ? 'fa fa-folder-open-o' : 'fa fa-folder-o'}
          aria-hidden
          style={{color: folder.color}} />
        {folder.name}
      </button>
    })}
  </div>
