import { h } from 'hyperapp'
import s from './index.styl'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'

const handleOnContextMenu = (e, toggleMode) => {
  e.preventDefault()
  toggleMode()
}

export default ({state, actions}) =>
  <div class={s.notedetail_root}
    oncontextmenu={(e) => handleOnContextMenu(e, actions.toggleMode)}>
    {
      state.mode === 'EDITOR'
        ? <MarkdownEditor />
        : <MarkdownPreview />
    }
  </div>
