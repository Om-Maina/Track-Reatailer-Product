import { combineReducers } from 'redux'
import * as loginState from './login'
import * as refreshTokenState from "./refresh"

export {
  loginState,
  refreshTokenState
}

export default combineReducers({
  loginUser: loginState.default(),
  refreshToken: refreshTokenState.default(),
})
