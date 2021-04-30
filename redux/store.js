import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

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
  undefined,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const makeStore = () => {
  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }

  const persistConfig = {
    key: 'nextjs',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['signUp', 'auth'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createWrapper(makeStore);
