// reducers.ts
import { SET_RETAILERS } from '../actions/actions';

interface Retailer {
  sr: number;
  ItemDescription: string;
  Unit: string;
  RequiredQuantity: number;
  StockQuantity: number;
  Rate: number;
  Total: number;
}

interface RootState {
  retailers: Retailer[];
}

const initialState: RootState = {
  retailers: [],
};

const retailersReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case SET_RETAILERS:
      return { ...state, retailers: action.payload };
    default:
      return state;
  }
};

export default retailersReducer;
