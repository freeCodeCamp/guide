import { combineReducers } from 'redux';

import { reducer as nav } from '../components/nav/redux';

const rootReducer = combineReducers({ nav });

export default rootReducer;
