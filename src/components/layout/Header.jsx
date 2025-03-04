import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout, login } from '../store/auth'

export default function Header() {
  const authenticateStore = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')

  const userNameHandler = (event) => {
    setUserName(event.target.value)
  }

  return (
    <header>
      {
        !authenticateStore.authenticate ?
          <div>
            <input type="text" onChange={userNameHandler} value={userName} />
            <button type="button" onClick={() => dispatch(login(userName))}>Login</button>
          </div>
          :
          <div>
            <span>{authenticateStore.userName ? authenticateStore.userName : 'Guess'}</span>
            <button type="button" onClick={() => dispatch(logout())}>Logout</button>
          </div>
      }
    </header>
  )
}
