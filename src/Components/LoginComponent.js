import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import {setEmail,setPassword,Login} from "../Actions/LoginAction"
function LoginComponent() {

  const myData=useSelector((store)=> store.LoginReducer)
  console.log(myData)
  const dispatch = useDispatch()

  const handleEmail = (event) => {
    dispatch(setEmail(event.target.value))
  }
  const handlePassword = (event) => {
    dispatch(setPassword(event.target.value))
  }
 
  const handleLogin=()=>{
    dispatch(Login(myData.email,myData.password))
  }

  return (
    <div>
      <input type="text" placeholder='enter email' onChange={handleEmail} />
      <input type="password" placeholder='enter password' onChange={handlePassword} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginComponent


// dispatch event from component->define function within action->return object to reducer->get action value and execute accurate event within switch statement