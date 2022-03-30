import React from 'react'
import { useDispatch, useSelector } from "react-redux"
function LoginComponent() {

  const dispatch = useDispatch()
  const handleEmail = (event) => {
    dispatch(setEmail(event.target.value))
  }
  const handlePassword = (event) => {
    dispatch(setPassword(event.target.value))
  }
  

  return (
    <div>
      <input type="text" placeholder='enter email' onChange={handleEmail} />
      <input type="password" placeholder='enter password' onChange={handlePassword} />
      <button>Login</button>
    </div>
  )
}

export default LoginComponent


// dispatch event from component->define function within action->return object to reducer->get action value and execute accurate event within switch statement