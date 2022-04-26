import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import {setEmail,setPassword,Login} from "../Actions/LoginAction"
function LoginComponent() {

  const myData=useSelector((store)=> store.LoginReducer)//access store values
  console.log(myData)

  const dispatch = useDispatch()//used to call a function

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


//triggering event in component->go to action->define your function and return object->define your reducer->within reducer define switch statement to handle multiple events->combine your reducer within combineReducer function->create your store variable->add store varibale within index.js file->install middleware and add it in your store file->pass store value as props to App component by using provider->access your store value within compoent by using useSelector Hook