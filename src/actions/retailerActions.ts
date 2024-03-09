// ActionTypes.js
export const FETCH_RETAILERS_DATA = 'FETCH_RETAILERS_DATA';
export const SET_RETAILERS_DATA = 'SET_RETAILERS_DATA';

export const fetchRetailersData = () => ({
  type: FETCH_RETAILERS_DATA,
});

export const setRetailersData = (retailersData: { sr: string; id: string; name: string; phone: string; status: string; icon: string; }[]) => ({
  type: SET_RETAILERS_DATA,
  payload: retailersData,
});
