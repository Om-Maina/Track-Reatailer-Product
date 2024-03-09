import { call, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actions'
import * as ApiService from '../services'
import { sendPayload, sendPayloadFailure } from './helper'
const { REQUEST, REFRESH } = actionTypes

//write sagas function

function* refreshTokenInfo(data: any) {
  try {
    const apiResponse: Generator<string, number, string> = yield call(
      ApiService.getRefreshToken,
      data.data,
    )
    yield sendPayload(apiResponse, REFRESH)
  } catch (e) {
    yield sendPayloadFailure(e, REFRESH)
  }
}

export const sagas = {
  //watcher come here
  watchRefreshToken: takeLatest(actionTypes.REFRESH[REQUEST], refreshTokenInfo),
}
