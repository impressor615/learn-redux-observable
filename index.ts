import configureStore from './configureStore'

const store = configureStore();
store.dispatch({ type: 'PING' });

