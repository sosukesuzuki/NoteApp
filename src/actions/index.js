export default {
  toggleCreateFolderModal: () => (state) => ({isCreateFolderModalShow: !state.isCreateFolderModalShow}),
  updateFolderModalInput: (text) => (state) => ({folderModalContent: text}),
  createFolder: (name, color) => (state) => {
    const newState = Object.assign({}, state)
    newState.folders.push({name, color, id: newState.folders[newState.folders.length - 1].id + 1})
    return {folders: newState.folders}
  },
  setFolderId: (folderId) => (state) => ({folderId})
}
