import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from 'react-redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // function from redux-logger in an array

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
