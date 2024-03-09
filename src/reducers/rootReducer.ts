import { combineReducers } from 'redux';
import tableReducer from './purchaseIndentstableReducer';
import DistributionTableReducer from './distributionTableReducer';

const rootReducer = combineReducers({
  table: tableReducer,
  distributionTable: DistributionTableReducer,
  // Add other reducers if you have them
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;