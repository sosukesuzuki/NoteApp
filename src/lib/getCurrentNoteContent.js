export default (notes, noteId) => {
  return notes.filter(note => {
    return note.id === noteId
  })[0].content
}
