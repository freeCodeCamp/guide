import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isOnline: (
    typeof window !== 'undefined' &&
    'navigator' in window &&
    'onLine' in navigator
  ) ? navigator.onLine : true
};

export const types = createTypes(
  [
    'updateOnlineStatus'
  ],
  'app'
);

export const updateOnlineStatus = createAction(types.updateOnlineStatus);

export const reducer = handleActions({
  [types.updateOnlineStatus]: (state, { payload }) => ({
    ...state,
    isOnline: payload
  })
}, initialState);
