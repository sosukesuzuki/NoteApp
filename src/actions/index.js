import findTitle from '../lib/findTitle'

export default {
  toggleCreateFolderModal: () => ({isCreateFolderModalShow}) => ({isCreateFolderModalShow: !isCreateFolderModalShow}),
  updateFolderModalInput: (text) => () => ({folderModalContent: text}),
  createFolder: (name, color) => (state) => {
    const newState = Object.assign({}, state)
    newState.folders.push({
      name,
      color,
      id: newState.folders[newState.folders.length - 1].id + 1
    })
    return {folders: newState.folders}
  },
  setFolderId: (folderId) => () => ({folderId}),
  createNote: (folderId) => (state) => {
    const newState = Object.assign({}, state)
    newState.notes.push({
      title: 'Untitled',
      content: '',
      folderId,
      id: newState.notes[newState.notes.length - 1].id + 1
    })
    return {notes: newState.notes}
  },
  setNoteId: (noteId) => () => ({noteId}),
  toggleMode: () => ({mode}) => {
    if (mode === 'EDITOR') {
      return {mode: 'PREVIEW'}
    } else if (mode === 'PREVIEW') {
      return {mode: 'EDITOR'}
    } else {
      console.log('invalid mode, mode change to PREVIEW')
      return {mode: 'PREVIEW'}
    }
  },
  updateNoteContent: (value) => (state) => {
    const notes = Object.assign({}, state).notes
    const newNotes = notes.map(note => {
      if (state.noteId === note.id) {
        note.content = value
        const newTitle = findTitle(value)
        note.title = newTitle || 'Untitled'
      }
      return note
    })
    return {
      notes: newNotes
    }
  },
  setCodeMirror: (cm) => () => ({cmInstance: cm})
}
