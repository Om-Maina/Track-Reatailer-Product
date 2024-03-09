import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_RETAILERS, setRetailers } from '../actions/actions';
import Item from "../pages/purchaseindents/table/itemDispatch.json";

interface Retailer {
  sr: number;
  ItemDescription: string;
  Unit: string;
  RequiredQuantity: number;
  StockQuantity: number;
  Rate: number;
  Total: number;
}

const getData = () => {
  const item = Item;
  return item;
}

function* fetchRetailersSaga(): Generator<any, void, Retailer[]> {
  try {

    const response = yield call(getData);
    const data: Retailer[] = response as Retailer[]; 
    yield put(setRetailers(data));
  } catch (error) {
    
    console.error('Error fetching retailers', error);
  }
}

export function* watchFetchRetailers() {
  yield takeLatest(FETCH_RETAILERS, fetchRetailersSaga);
}
