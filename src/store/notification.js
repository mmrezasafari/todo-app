import { createSlice } from "@reduxjs/toolkit";

const notificationStore = createSlice({
  name: 'notification',
  initialState: {
    visible: false,
    status: null,
    title: null
  },
  reducers: {
    setNotificationData: (state, action) => {
      state.visible = action.payload.visible
      state.status = action.payload.status
      state.title = action.payload.title
    },
  }
})


export const notificationAction = notificationStore.actions
export default notificationStore.reducer
