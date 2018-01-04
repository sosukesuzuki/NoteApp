import { h } from 'hyperapp'
import s from './index.styl'

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (state, actions) =>
  <div class={s.root}>
    <h1>hyperapp-one</h1>
    <p><em>With JSX and Webpack</em></p>
    <hr />
    <section>
      <button
        class='sub'
        onclick={actions.sub}
        disabled={state.num < 1}
      >
        -
      </button>
      <h1 class='count'>{state.num}</h1>
      <button
        class='add'
        onclick={actions.add}
      >
        +
      </button>
    </section>
  </div>
