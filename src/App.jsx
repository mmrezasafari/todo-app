import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllTodos } from "./store/todo-actions"
import Task from "./components/todo/Task"
import Notification from "./components/layout/Notification"
import './App.css'

function App() {
  const dispatch = useDispatch()
  const userTasks = useSelector((state) => state.todo.allUserTasks)
  const notification = useSelector((state) => state.notification)

  useEffect(() => {
    dispatch(fetchAllTodos())
  }, [dispatch])

  return (
    <>
      {
        <Notification status={notification.status} title={notification.title} />
      }
      {
        userTasks.map((task, index) => {
          return <Task key={task.id} task={task} index={index} />
        })
      }
    </>
  )
}

export default App
