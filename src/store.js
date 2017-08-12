import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/reducers';

let createStore;

if (process.NODE_ENV !== 'production') {
  createStore = () => reduxCreateStore(
    rootReducer,
    composeWithDevTools()
  );
} else {
  createStore = () => reduxCreateStore(rootReducer);
}

export default createStore;
