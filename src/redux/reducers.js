import { combineReducers } from 'redux';

import { reducer as nav } from '../layouts/components/nav/redux';
import { reducer as search } from '../layouts/components/search/redux';

const rootReducer = combineReducers({
  nav,
  search
});

export default rootReducer;
