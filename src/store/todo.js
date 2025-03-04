import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todos',
  initialState: {
    allUserTasks: []
  },
  reducers: {
    fetchAllTodos: (state, action) => {
      state.allUserTasks = action.payload
    },
    updateTodo: (state, action) => {
      const updatedTodo = { ...action.payload }
      const index = state.allUserTasks.findIndex(todo => todo.id === updatedTodo.id)

      if (index !== -1) {
        state.allUserTasks[index] = updatedTodo
      }
    },
    deleteTodo: (state, action) => {
      const todoTarget = action.payload
      state.allUserTasks = state.allUserTasks.filter((todo) => todo.id !== todoTarget.id)
    },
  }
})

export const todoActions = todoStore.actions
export default todoStore.reducer
