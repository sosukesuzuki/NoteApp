import { h } from 'hyperapp'
import codemirror from 'codemirror'
require('codemirror/lib/codemirror.css')
require('codemirror/mode/markdown/markdown')

const handleOnCreate = (e, options, onChange) => {
  const cm = codemirror.fromTextArea(e, options)
  cm.on('change', () => onChange(cm.getValue()))
}

export default ({value, options, onChange}) => {
  return (
    <div>
      <textarea
        defaultValue={value}
        oncreate={(e) => handleOnCreate(e, options, onChange)} />
    </div>
  )
}
