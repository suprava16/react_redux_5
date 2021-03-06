import { getDefaultNormalizer } from "@testing-library/react";
import { SET_EMAIL, SET_PASSWORD } from "../Constants/LoginConstant";

const initial_state = {
  email: "",
  password: "",
}

export default function LoginReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload } 
    case SET_PASSWORD:
      return state = { ...state, password: action.payload } 
      default: return state
  }
}