import { combineReducers } from 'redux';

import { reducer as nav } from '../components/nav/redux';
import { reducer as search } from '../components/search/redux';

const rootReducer = combineReducers({
  nav,
  search
});

export default rootReducer;
