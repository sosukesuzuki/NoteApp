import { h } from 'hyperapp'
import s from './index.styl'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreview from './components/MarkdownPreview'

export default ({state, actions}) =>
  <div class={s.notedetail_root}>
    {
      state.mode === 'EDITOR'
        ? <MarkdownEditor />
        : <MarkdownPreview />
    }
  </div>
