import { combineReducers } from 'redux'
import { actionTypes } from '../../actions'
import { actions } from '../../actions/Types'

const { SUCCESS, REQUEST, FAILURE, LOGIN } = actionTypes

const ui = () => {
  const isLoginUserDone = (state = false, action: actions) => {
    switch (action.type) {
      case LOGIN[SUCCESS]:
        return true
      case LOGIN[FAILURE]:
      case LOGIN[REQUEST]:
        return false
      default:
        return state
    }
  }
  return combineReducers({
    isLoginUserDone,
  })
}

export default ui

export const getDashboard = (state: any) => state.ui.dashboard
