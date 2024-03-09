// tableActions.ts
import { FETCH_TABLE_DATA_REQUEST, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE } from './purchaseIndentsActionTypes';

import { FETCH_DISTRIBUTION_TABLE_REQUEST, FETCH_DISTRIBUTION_TABLE_SUCCESS, FETCH_DISTRIBUTION_TABLE_FAILURE } from './purchaseIndentsActionTypes';

export const fetchTableDataRequest = () => ({
  type: FETCH_TABLE_DATA_REQUEST,
});

export const fetchTableDataSuccess = (data: any) => ({
  type: FETCH_TABLE_DATA_SUCCESS,
  payload: data,
});

export const fetchTableDataFailure = (error: string) => ({
  type: FETCH_TABLE_DATA_FAILURE,
  payload: error,
});

// distribution table

export const fetchDistributionDataRequest = () => ({
  type: FETCH_DISTRIBUTION_TABLE_REQUEST,
});

export const fetchDistributionDataSuccess = (data: any) => ({
  type: FETCH_DISTRIBUTION_TABLE_SUCCESS,
  payload: data,
});

export const fetchDistributionDataFailure = (error: string) => ({
  type: FETCH_DISTRIBUTION_TABLE_FAILURE,
  payload: error,
});
