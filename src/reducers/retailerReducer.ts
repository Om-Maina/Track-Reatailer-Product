// reducer.js
import { SET_RETAILERS_DATA } from '../actions/retailerActions';

const initialState = {
  retailersData: [],
};

const retailersReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case SET_RETAILERS_DATA:
      return {
        ...state,
        retailersData: action.payload,
      };
    default:
      return state;
  }
};

export default retailersReducer;
