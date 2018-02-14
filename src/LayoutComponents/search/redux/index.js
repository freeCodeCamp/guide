import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isSearching: false,
  lastPage: '/',
  results: [],
  searchTerm: ''
};

export const types = createTypes(
  [
    'updateIsSearching',
    'updateLastPage',
    'updateSearchResults',
    'updateSearchTerm'
  ],
  'search'
);

export const updateIsSearching = createAction(types.updateIsSearching);
export const updateLastPage = createAction(types.updateLastPage);
export const updateSearchResults = createAction(types.updateSearchResults);
export const updateSearchTerm = createAction(types.updateSearchTerm);

export const reducer = handleActions(
  {
    [types.updateIsSearching]: (state, { payload }) => ({
      ...state,
      isSearching: payload
    }),
    [types.updateLastPage]: (state, { payload }) => ({
      ...state,
      lastPage: payload
    }),
    [types.updateSearchResults]: (state, { payload = [] }) => ({
      ...state,
      results: payload
    }),
    [types.updateSearchTerm]: (state, { payload }) => ({
      ...state,
      searchTerm: payload
    })
  },
  initialState
);
