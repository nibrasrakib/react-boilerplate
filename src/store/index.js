import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose;

const enhancer = composeEnhancers(
    applyMiddleware(promise, thunk) //logger
);

const store = createStore(rootReducer, enhancer);

export default store;
