export default (folders, folderId) => {
  return folders.filter(folder => {
    return folder.id === folderId
  })[0].name
}
