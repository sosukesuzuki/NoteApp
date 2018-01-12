export default (notes, folderId) => {
  return notes.filter(note => {
    return note.folderId === folderId
  })
}
