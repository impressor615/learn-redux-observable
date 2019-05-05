import configureStore from './configureStore';
import { fetchUser } from './epics';

const store = configureStore();

// dispatch calls
// store.dispatch({ type: 'PING' });
// store.dispatch(fetchUser('impressor615'));
store.dispatch({ type: 'INCREMENT' });
console.log('current state: ', store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log('current state: ', store.getState());
store.dispatch({ type: 'INCREMENT_IF_ODD' });
console.log('current state: ', store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log('current state: ', store.getState());
store.dispatch({ type: 'INCREMENT_IF_ODD' });
console.log('current state: ', store.getState());

