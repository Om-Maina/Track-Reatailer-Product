import { all } from 'redux-saga/effects'
import { sagas as loginSagas } from './login'
import { sagas as refreshSagas } from './refresh'


export default function* rootSaga() {
  yield all({
    ...loginSagas,
    ...refreshSagas,
  })
}
