import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSagas from './sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(createReducer(history), initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSagas);

  return store;
}