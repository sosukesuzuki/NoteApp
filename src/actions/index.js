export default {
  toggleCreateFolderModal: () => (state) => ({isCreateFolderModalShow: !state.isCreateFolderModalShow}),
  updateFolderModalInput: (text) => (state) => ({folderModalContent: text})
}
