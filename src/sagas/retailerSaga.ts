// sagas.js
import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_RETAILERS_DATA, setRetailersData } from '../actions/retailerActions';
import retailersData from '../pages/distributionPage/table/retailerData.json';

function* fetchRetailersDataSaga() {
  try {
    // Simulate an API call, replace with your actual API call
    yield new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("saga retail:", retailersData);

    // Dispatch the action with the fetched data
    yield put(setRetailersData(retailersData));
  } catch (error) {
    console.error('Error fetching retailers data:', error);
  }
}

export function* watchRetailersSaga() {
  yield takeLatest(FETCH_RETAILERS_DATA, fetchRetailersDataSaga);
}
