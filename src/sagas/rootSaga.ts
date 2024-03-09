// rootSaga.ts
import { all } from 'redux-saga/effects';
import tableSaga from './purchaseIndentsTableSaga';
import DistributionTableData from './distributionTableSaga';
import { watchRetailersSaga } from './retailerSaga';

function* rootSaga() {
  yield all([tableSaga(), watchRetailersSaga()]);
  yield all([DistributionTableData()]);
  // watchFetchStackedBarData(),
}

export default rootSaga;
