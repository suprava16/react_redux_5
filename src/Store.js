import { createStore ,applyMiddleware} from 'redux'
import CombineReducer from "./Reducers/CombineReducer"
 import thunk from 'redux-thunk'
let store=createStore(CombineReducer,applyMiddleware(thunk))

export default store
