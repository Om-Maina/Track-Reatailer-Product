
import { combineReducers } from 'redux';
import entities, * as Entities from './entities'
import ui, * as UI from './ui'
import tableReducer from './purchaseIndentstableReducer';
import DistributionTableReducer from './distributionTableReducer';
import retailerReducer from './retailerReducer';

const rootReducer = combineReducers({
  table: tableReducer,
  distributionTable: DistributionTableReducer,
  retailers: retailerReducer,
  entities,
  ui,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
