import { updateTodo, deleteTodo } from "../../store/todo-actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import classes from './Task.module.css'
import Card from "../UI/Card"
import Input from "../UI/Input"
import Button from '../UI/Button.jsx'
import CheckBox from "../UI/CheckBox"

export default function Task({ task, index }) {
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [inputValue, setInputValue] = useState(task.title)

  const editTaskHandler = async () => {
    if (inputValue.trim() !== task.title) {
      dispatch(updateTodo({ ...task, title: inputValue }))
    }
    setEditable(false)
  }

  const onChnageInputHandler = (event) => {
    setInputValue(event.target.value)
  }

  const deleteTaskHandler = (data) => {
    dispatch(deleteTodo(data))
  }

  const toggleTaskStatusHandler = (event) => {
    dispatch(updateTodo({ ...task, completed: event.target.checked }))
  }

  return (
    <Card>
      <div className={classes.inputs}>
        <p>{index + 1} |</p>
        <CheckBox
          onChange={toggleTaskStatusHandler}
          checked={task.completed}
        />
        {
          !editable
            ? <p>{task.title}</p>
            : <Input value={inputValue} onChange={onChnageInputHandler} />
        }
      </div>
      <div className={classes.buttons}>
        {
          !editable
            ? <Button
              colorType="primary"
              onClick={() => setEditable(true)}
            >
              Edit
            </Button>
            : <Button
              colorType="success"
              onClick={editTaskHandler}
            >
              save
            </Button>
        }
        <Button
          colorType="danger"
          onClick={() => deleteTaskHandler(task)}
        >
          Delete
        </Button>
      </div>
    </Card>
  )
}
