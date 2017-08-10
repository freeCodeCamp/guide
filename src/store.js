import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
