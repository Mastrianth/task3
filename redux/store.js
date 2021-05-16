import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';
import rootSaga from './sagas';

const isServer = typeof window === 'undefined';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers;
if (isServer) {
  composeEnhancers = null || compose;
} else {
  composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
}

const makeConfiguredStore = (reducer) => createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const makeStore = () => {
  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }

  const store = makeConfiguredStore(rootReducer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createWrapper(makeStore);
