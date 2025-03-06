import { todoActions } from "./todo"
import { notificationAction } from './notification'


export const fetchAllTodos = () => {
  return async (dispatch) => {
    const fetchDate = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          if (!response.ok) {
            throw new Error('could not fetch todos')
          }

          return response
        })

      return response.json()
    }

    try {
      dispatch(notificationAction.setNotificationData({
        visible: true,
        status: 'waiting',
        title: 'waiting ...'
      }))
      const data = await fetchDate()
      dispatch(todoActions.fetchAllTodos(data))
      dispatch(notificationAction.setNotificationData({
        visible: true,
        status: 'success',
        title: 'data fetch successfully'
      }))
    } catch (err) {
      console.error(err)
      dispatch(notificationAction.setNotificationData({
        visible: true,
        status: 'error',
        title: 'could not fetch data'
      }))
    }
  }
}

export const updateTodo = (data) => {
  return (dispatch) => {
    const updateTodo = { ...data }
    dispatch(notificationAction.setNotificationData({
      visible: true,
      status: 'waiting',
      title: 'waiting ...'
    }))
    dispatch(todoActions.updateTodo(updateTodo))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(updateTodo)
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(notificationAction.setNotificationData({
          visible: true,
          status: 'success',
          title: 'data fetch successfully'
        }))
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

export const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch(notificationAction.setNotificationData({
      visible: true,
      status: 'waiting',
      title: 'waiting ...'
    }))
    dispatch(todoActions.deleteTodo(data))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(notificationAction.setNotificationData({
          visible: true,
          status: 'success',
          title: 'data fetch successfully'
        }))
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
