import { put } from 'redux-saga/effects'
import { actionTypes } from '../actions'
import { addAuthToken } from '../services/rest'
const { SUCCESS, FAILURE } = actionTypes


export function* sendPayload(apiResponse: any, event: { [x: string]: any }) {
  if (event[SUCCESS] === 'LOGIN_SUCCESS' && apiResponse.data.accessToken) {
    localStorage.setItem('token', apiResponse.data.accessToken)
    addAuthToken()
  }
  yield put({
    type: apiResponse ? event[SUCCESS] : event[FAILURE],
    payload: apiResponse ? (apiResponse ? apiResponse.data : apiResponse.data.error) : {},
  })
}

export function* sendPayloadFailure(error: any, event: { [x: string]: any }) {
  if (error.response) {
    if (error.response.status === 401) {
      // window.location.href = '/unauthorized'
      
    }
    yield put({
      type: event[FAILURE],
      payload: error.response ? error.response : {},
    })
  } else {
    yield put({
      type: event[FAILURE],
      payload: error,
    })
  }
}
