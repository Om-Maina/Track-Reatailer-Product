// tableSaga.ts
import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_TABLE_DATA_REQUEST, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE } from '../actions/purchaseIndentsActionTypes';
import tableData from '../pages/purchaseindents/table/itemDispatch.json';

function* fetchTableData() {
  try {

    yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    yield put({ type: FETCH_TABLE_DATA_SUCCESS, payload: tableData });
    
  } catch (error) {
    yield put({ type: FETCH_TABLE_DATA_FAILURE, payload: 'Failed to fetch table data.' });
  }
}

function* tableSaga() {
  yield takeLatest(FETCH_TABLE_DATA_REQUEST, fetchTableData);
}

export default tableSaga;
