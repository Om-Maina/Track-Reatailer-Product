// tableSaga.ts
import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_DISTRIBUTION_TABLE_REQUEST, FETCH_DISTRIBUTION_TABLE_SUCCESS, FETCH_DISTRIBUTION_TABLE_FAILURE } from '../actions/purchaseIndentsActionTypes';
import DistributionTablejsonData from '../pages/distributionPage/table/retailerData.json';

function* fetchDistributionTableData() {
  try {

    yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    yield put({ type: FETCH_DISTRIBUTION_TABLE_SUCCESS, payload: DistributionTablejsonData });
    
  } catch (error) {
    yield put({ type: FETCH_DISTRIBUTION_TABLE_FAILURE, payload: 'Failed to fetch table data.' });
  }
}

console.log("saga: ",DistributionTablejsonData)
function* DistributionTableData() {
  yield takeLatest(FETCH_DISTRIBUTION_TABLE_REQUEST, fetchDistributionTableData);
}

export default DistributionTableData;
