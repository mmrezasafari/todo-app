import { todoActions } from "./todo"
import { notificationAction } from './notification'

export const fetchAllTodos = () => {
  return async (dispatch) => {
    dispatch(notificationAction.setNotificationData({
      visible: true,
      status: 'waiting',
      title: 'waiting ...'
    }))

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.ok) {
          dispatch(notificationAction.setNotificationData({
            visible: true,
            status: 'success',
            title: 'data fetch successfully'
          }))
          return response.json()
        } else {
          throw new Error('could not fetch data')
        }
      })
      .then(data => {
        dispatch(todoActions.fetchAllTodos(data))
      })
      .catch((err) => {
        dispatch(notificationAction.setNotificationData({
          visible: true,
          status: 'error',
          title: 'could not fetch data'
        }))
        console.error(err)
      })
  }
}

export const updateTodo = (data) => {
  return (dispatch) => {
    dispatch(notificationAction.setNotificationData({
      visible: true,
      status: 'waiting',
      title: 'waiting ...'
    }))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          dispatch(todoActions.updateTodo(data))
          dispatch(notificationAction.setNotificationData({
            visible: true,
            status: 'success',
            title: 'data update successfully'
          }))
        } else {
          throw new Error('could not update data')
        }
      })
      .catch((err) => {
        dispatch(notificationAction.setNotificationData({
          visible: true,
          status: 'error',
          title: 'could not update data'
        }))
        console.error(err)
      })

  }
}

export const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch(notificationAction.setNotificationData({
      visible: true,
      status: 'waiting',
      title: 'waiting ...'
    }))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(todoActions.deleteTodo(data))
          dispatch(notificationAction.setNotificationData({
            visible: true,
            status: 'success',
            title: 'data delete successfully'
          }))
        } else {
          throw new Error('could not delete data')
        }
      })
      .catch((err) => {
        dispatch(notificationAction.setNotificationData({
          visible: true,
          status: 'error',
          title: 'could not delete data'
        }))
        console.error(err)
      })

  }
}
