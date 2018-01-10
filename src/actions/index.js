export default {
  toggleCreateFolderModal: () => (state) => ({isCreateFolderModalShow: !state.isCreateFolderModalShow}),
  updateFolderModalInput: (text) => (state) => ({folderModalContent: text}),
  createFolder: (name, color) => (state) => {
    const newState = Object.assign({}, state)
    newState.folders.push({
      name,
      color,
      id: newState.folders[newState.folders.length - 1].id + 1
    })
    return {folders: newState.folders}
  },
  setFolderId: (folderId) => (state) => ({folderId}),
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
  setNoteId: (noteId) => (state) => ({noteId}),
  toggleMode: () => (state) => {
    if (state.mode === 'EDITOR') {
      return {mode: 'PREVIEW'}
    } else if (state.mode === 'PREVIEW') {
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
      }
      return note
    })
    return {
      notes: newNotes
    }
  },
  setCodeMirror: (cm) => (state) => ({cmInstance: cm})
}
