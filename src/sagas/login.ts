import { call, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actions'
import * as ApiService from '../services'
import { sendPayload, sendPayloadFailure } from './helper'
const { REQUEST, LOGIN } = actionTypes

//write sagas function

function* handleLoginUser(data: any) {
  try {
    const apiResponse: Generator<string, number, string> = yield call(
      ApiService.getLoginAuth,
      data.data,
    )
    yield sendPayload(apiResponse, LOGIN)
  } catch (e) {
    yield sendPayloadFailure(e, LOGIN)
  }
}

export const sagas = {
  //watcher come here
  watchloginUser: takeLatest(actionTypes.LOGIN[REQUEST], handleLoginUser),
}
