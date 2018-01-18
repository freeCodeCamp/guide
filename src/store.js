import { createStore as reduxCreateStore } from 'redux';

import rootReducer from './redux/reducers';

const createStore = () => reduxCreateStore(
  rootReducer
);

export default createStore;
