import storage from './util/storage.js'

const init = {
  todos: storage.get(),
  filter: 'all',
  filters: {
    all: () => true,
    active: (todo) => !todo.isCompleted,
    completed: todo => todo.isCompleted
  },
  editIndex: null
}

const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title: title, isCompleted: false })
      storage.set(todos)
    }
  },
  toggleItem({ todos }, index) {
    const todo = todos[index]
    todo.isCompleted = !todo.isCompleted
    storage.set(todos)
  },
  destroy({ todos }, index) {
    todos.splice(index, 1)
    storage.set(todos)
  },
  toggleAll({ todos }, active) {
    for(const todo of todos) todo.isCompleted = !active
    storage.set(todos)
  },
  swapFilter(state, filter) {
    state.filter = filter
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active)
    storage.set(state.todos)
  },
  startEdit(state, index) {
    state.editIndex = index
  },
  endEdit(state, title) {
    if (state.editIndex !== null) {
      if (title) {
        state.todos[state.editIndex].title = title
        storage.set(state.todos)
      }
      else {
        this.destroy(state, state.editIndex)
      }
      state.editIndex = null
    }
  },
  exitEdit(state) {
    state.editIndex = null
  }
}

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args)
  return state
}