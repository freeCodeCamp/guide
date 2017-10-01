import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

import { expandedState, pages, parents } from './navigationState';

const initialState = {
  expandedState,
  isMenuOpen: false,
  pages,
  parents
};

export const types = createTypes(
  [
    'toggleExpandedState',
    'toggleMenuOpen'
  ],
  'nav'
);

export const toggleExpandedState = createAction(types.toggleExpandedState);
export const toggleMenuOpen = createAction(types.toggleMenuOpen);

export const reducer = handleActions(
  {
    [types.toggleExpandedState]: (state, { payload: path }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        [path]: !state.expandedState[path]
      }
    }),
    [types.toggleMenuOpen]: state => ({
      ...state,
      isMenuOpen: !state.isMenuOpen
    })
  },
  initialState
);
