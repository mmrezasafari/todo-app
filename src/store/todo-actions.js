import { todoActions } from "./todo"

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
      const data = await fetchDate()
      dispatch(todoActions.fetchAllTodos(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateTodo = (data) => {
  return (dispatch) => {
    const updateTodo = { ...data }
    dispatch(todoActions.updateTodo(updateTodo))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(updateTodo)
    })
      .then((response) => response.json())
      .then((data) => console.log('data updated', data))
      .catch((err) => {
        console.error(err)
      })

  }
}

export const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch(todoActions.deleteTodo(data))

    fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('data deleted', data))
      .catch((err) => {
        console.error(err)
      })

  }
}
