import { combineReducers } from 'redux';

import { reducer as nav } from '../LayoutComponents/nav/redux';

const rootReducer = combineReducers({
  nav
});

export default rootReducer;
