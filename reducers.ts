import { Action } from 'redux';

export const pingReducer = (state = { isPinging: false }, action: Action) => {
  if (action.type === 'PING' || action.type === 'PONG') {
    console.log('action: ', action);
    console.log('state: ', state);
  }
  switch (action.type) {
    case 'PING':
      return { isPinging: true };

    case 'PONG':
      return { isPinging: false };

    default:
      return state;
  }
};

