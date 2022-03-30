import {createStore} from "redux"
import CombineReducer from "./Reducers/CombineReducer"

let store=createStore(CombineReducer)

export default store
