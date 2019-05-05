import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import { pingReducer } from './reducers';

const rootReducer = combineReducers({
  pingReducer,
});

export default () => {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
  epicMiddleware.run(rootEpic);
  return store;
}
