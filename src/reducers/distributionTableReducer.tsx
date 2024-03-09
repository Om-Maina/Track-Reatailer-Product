// tableReducer.ts
import { FETCH_DISTRIBUTION_TABLE_REQUEST, FETCH_DISTRIBUTION_TABLE_SUCCESS, FETCH_DISTRIBUTION_TABLE_FAILURE } from '../actions/purchaseIndentsActionTypes';

interface DistributionTableState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DistributionTableState = {
  data: [],
  loading: false,
  error: null,
};

console.log("reducer: ",FETCH_DISTRIBUTION_TABLE_REQUEST)
const DistributionTableReducer = (state = initialState, action: any): DistributionTableState => {
  switch (action.type) {
    case FETCH_DISTRIBUTION_TABLE_REQUEST:
      console.log("reducer data", action.payload);
      return { ...state, loading: true, error: null };
    case FETCH_DISTRIBUTION_TABLE_SUCCESS:
      console.log("reducer data", action.payload);
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DISTRIBUTION_TABLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default DistributionTableReducer;
