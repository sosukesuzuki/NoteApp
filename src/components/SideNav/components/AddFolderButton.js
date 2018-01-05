import { h } from 'hyperapp'
import s from './AddFolderButton.styl'

const handleOnClick = (toggle) => {
  toggle()
}

export default ({toggle}) =>
  <div class={s.root}>
    <button onclick={() => handleOnClick(toggle)}>
      <i class='fa fa-plus' aria-hidder />
    </button>
  </div>
