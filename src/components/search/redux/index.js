import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  fetchingTypeAheads: false,
  fetchingTypeAheadsFailed: false,
  fetchingTypeAheadsSuccess: false,
  typeAheads: [],

  results: [],
  searchTerm: ''
};

export const types = createTypes(
  [
    'fetchTypeAheads',
    'fetchingTypeAheadsFailed',
    'updateTypeAheads',

    'fetchSearchResults',
    'updateSearchResults',
    'updateSearchTerm'
  ],
  'search'
);

export const fetchTypeAheads = createAction(types.fetchTypeAheads);
export const fetchingTypeAheadsFailed = createAction(
  types.fetchingTypeAheadsFailed
);
export const updateTypeAheads = createAction(types.updateTypeAheads);

export const fetchSearchResults = createAction(types.fetchSearchResults);
export const updateSearchResults = createAction(types.updateSearchResults);
export const updateSearchTerm = createAction(types.updateSearchTerm);

export const reducer = handleActions(
  {
    [types.fetchTypeAheads]: state => ({
      ...state,
      fetchingTypeAheads: true,
      fetchingTypeAheadsFailed: false,
      fetchingTypeAheadsSuccess: false
    }),
    [types.fetchingTypeAheadsFailed]: state => ({
      ...state,
      fetchingTypeAheads: false,
      fetchingTypeAheadsFailed: true,
      fetchingTypeAheadsSuccess: false
    }),
    [types.updateTypeAheads]: (state, { payload }) => ({
      ...state,
      fetchingTypeAheads: false,
      fetchingTypeAheadsFailed: false,
      fetchingTypeAheadsSuccess: true,
      typeAheads: payload
    }),
    [types.updateSearchResults]: (state, { payload = [] }) => ({
      ...state,
      results: Array.isArray(payload) ? payload : []
    }),
    [types.updateSearchTerm]: (state, { payload }) => ({
      ...state,
      searchTerm: payload
    })
  },
  initialState
);
