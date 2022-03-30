import { SET_EMAIL,SET_PASSWORD } from "../Constants/LoginConstant"
export function setEmail(email){
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

