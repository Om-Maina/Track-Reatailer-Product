import { combineReducers } from 'redux'
import * as loginState from './login'

export {
  loginState,
}

export default combineReducers({
  dashboard: loginState.default(),
})
