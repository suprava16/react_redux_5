import { SET_EMAIL,SET_PASSWORD } from "../Constants/LoginConstant"
export function setEmail(email){
  // console.log(email)
return{
  type: SET_EMAIL,
  payload: email
}
}

export function setPassword(password){
return{
  type: SET_PASSWORD,
  payload:password
}
}

export function Login(email,password){
return()=>{
  fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
    })
}
}

