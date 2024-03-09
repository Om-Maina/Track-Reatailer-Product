// tableReducer.ts
import { FETCH_TABLE_DATA_REQUEST, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE } from '../actions/purchaseIndentsActionTypes';

interface TableState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TableState = {
  data: [],
  loading: false,
  error: null,
};

const tableReducer = (state = initialState, action: any): TableState => {
  switch (action.type) {
    case FETCH_TABLE_DATA_REQUEST:
      console.log("reducer data:", action.payload);
      return { ...state, loading: true, error: null };
    case FETCH_TABLE_DATA_SUCCESS:
   
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_TABLE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
