import { INITIAL_STATE } from '../constants/InitialState';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import nextRootReducer from '../reducers';

function configureStore(initialState = INITIAL_STATE) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();
export default store;