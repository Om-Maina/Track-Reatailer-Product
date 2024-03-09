
export const FETCH_RETAILERS = 'FETCH_RETAILERS';
export const SET_RETAILERS = 'SET_RETAILERS';

export const fetchRetailers = () => ({
  type: FETCH_RETAILERS,
});

export const setRetailers = (retailers: any[]) => ({
  type: SET_RETAILERS,
  payload: retailers,
});
