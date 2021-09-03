import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // function from redux-logger in an array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
