import { configureStore } from "@reduxjs/toolkit";
import todoStore from './todo'
import notification from './notification.js'

export const store = configureStore({
  reducer: {
    todo: todoStore,
    notification: notification
  }
})
