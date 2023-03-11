import {legacy_createStore, applyMiddleware, combineReducers} from "redux"
import {thunk} from "redux-thunk"
import { reducer as AuthReducer} from "./AuthReducer/reducer"
import { reducer as AppReducer} from "./AppReducer/reducer"

const reducer = combineReducers(AuthReducer, AppReducer)
const store = legacy_createStore(reducer, applyMiddleware(thunk))