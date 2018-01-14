import { h } from 'hyperapp'
import s from './MarkdownPreview.styl'
import remark from 'remark'
import html from 'remark-html'
import recommended from 'remark-preset-lint-recommended'

const dangerouslySetInnerHTML = (e, html) => {
  e.innerHTML = html
}

const handleUpdate = (e, oldProps, value) => {
  dangerouslySetInnerHTML(e, md2html(value))
}

const md2html = (md) => {
  let htmlText = ''
  remark().use(html).use(recommended)
    .process(md, (err, html) => {
      if (err) {
        console.error(err)
      } else {
        htmlText = html.contents
      }
    })
  return htmlText
}

export default ({value, noteId}) =>
  <div class={s.preview_root}>
    <div class={s.preview_main}
      noteId={noteId}
      value={value}
      onupdate={(e, oldProps) => handleUpdate(e, oldProps, value)}
      oncreate={e => dangerouslySetInnerHTML(e, md2html(value))} />
  </div>
