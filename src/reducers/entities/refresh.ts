import { combineReducers } from 'redux'
import { actionTypes } from '../../actions'
import { actions } from '../../actions/Types'

const { SUCCESS, REQUEST, REFRESH } = actionTypes

const intialState = {
  isLoading: true,
  isError: false,
  data: {},
  errorMessage:""
}

const entity = () => {
  const refreshToken = (state = intialState, action: actions) => {
    switch (action.type) {
      case REFRESH[SUCCESS]:
        return {...state,data: action.payload.data, isLoading:false}
      case REFRESH[REQUEST]:
        return state
      default:
        return state
    }
  }

  return combineReducers({
    refreshToken,
  })
}

export default entity

export const refreshToken = (state: any) => state.entities.refreshToken
