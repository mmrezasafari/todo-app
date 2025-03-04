import { configureStore } from "@reduxjs/toolkit";
import todoStore from './todo'

export const store = configureStore({
  reducer: {
    todo: todoStore
  }
})
