import html from '../core.js'
import { connect } from '../store.js'

import FooterItem from './FooterItem.js'

function Footer({ todos, filter, filters }) {
  return html`
    <footer class="footer">
      <span class="todo-count"><strong>${todos.filter(filters[filter]).length}</strong> item left</span>
      <ul class="filters">
        ${ (Object.keys(filters)).map(type => FooterItem({ type })) }
      </ul>
      ${ todos.filter(filters.completed).length > 0 && 
        html`<button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>` 
      }
    </footer>
  `
}

export default connect()(Footer)