import { combineReducers } from 'redux'
import { actionTypes } from '../../actions'
import { actions } from '../../actions/Types'
import { FAILURE } from '../../actions/actiontypes'

const { SUCCESS, REQUEST, LOGIN } = actionTypes

const intialState = {
  isLoading: true,
  isError: false,
  data: {},
  errorMessage:""
}

const entity = () => {
  const loginUserData = (state = intialState, action: actions) => {
    switch (action.type) {
      case LOGIN[SUCCESS]:
        return {...state,data: action.payload , isLoading:false}
      case LOGIN[REQUEST]:
        return state
      case LOGIN[FAILURE]:
          return {...state,data: action.payload, isLoading:false,isError:true}
      default:
        return state
    }
  }

  return combineReducers({
    loginUserData,
  })
}

export default entity

export const loginUser = (state: any) => state.entities.loginUser
