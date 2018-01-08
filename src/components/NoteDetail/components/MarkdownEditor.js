import { h } from 'hyperapp'
import s from './MarkdownEditor.styl'
import CodeEditor from './CodeEditor'

const options = {
  theme: 'default',
  lineNumbers: true,
  mode: 'markdown'
}

const handleOnChange = (e) => {
  console.log(e)
}

export default ({value}) =>
  <div class={s.root}>
    <CodeEditor class={s.editor}
      value={value}
      options={options}
      onChange={handleOnChange} />
  </div>
