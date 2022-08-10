import html from '../core.js'
import { connect } from '../store.js'

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li class="${todo.isCompleted && 'completed'} ${editIndex === index && 'editing'}"
    >
      <div class="view" ondblclick="dispatch('startEdit', ${index})">
        <input class="toggle" type="checkbox" 
          ${todo.isCompleted && 'checked'}
          onclick="dispatch('toggleItem', ${index})"
        >
        <label>${todo.title}</label>
        <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
      </div>
      <input 
        class="edit" 
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())
        || event.keyCode === 27 && dispatch('exitEdit')"
        onblur="dispatch('endEdit', this.value.trim())"
      >
    </li>
  `
}

export default connect()(TodoItem)