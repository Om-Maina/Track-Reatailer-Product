import * as actions from './actiontypes'

const {
  SUCCESS,
  REQUEST,
  FAILURE,
  RESET,
  LOGIN,
  REFRESH,
  action,
} = actions

// Bellow are the Action Objects
export const loginUser = {
  request: (data: Object) => action(LOGIN[REQUEST], { data }),
  success: (response: Object) => action(LOGIN[SUCCESS], { response }),
  failure: () => action(LOGIN[FAILURE]),
  reset: () => action(LOGIN[RESET], {}),
}

export const refreshCall = {
  request: (data: Object) => action(REFRESH[REQUEST]),
  success: (response: Object) => action(REFRESH[SUCCESS], { response }),
  failure: () => action(REFRESH[FAILURE]),
  reset: () => action(REFRESH[RESET], {}),
}

export const actionTypes = {
  ...actions,
}

