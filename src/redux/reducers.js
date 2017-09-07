import { combineReducers } from 'redux';

import { reducer as app } from '../LayoutComponents/redux';
import { reducer as nav } from '../LayoutComponents/nav/redux';
import { reducer as search } from '../LayoutComponents/search/redux';

const rootReducer = combineReducers({
  app,
  nav,
  search
});

export default rootReducer;
