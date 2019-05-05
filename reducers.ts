import { Action } from 'redux';

type ActionWithPayload = Action & {
  payload: {
    login :string;
  }
}

export const pingReducer = (state = {
  isPinging: false,
  counter: 0,
}, action: ActionWithPayload) => {
  if (
    action.type === 'PING'
    || action.type === 'PONG'
    || action.type === 'FETCH_USER'
    || action.type === 'FETCH_USER_FULFILLED'
    || action.type === 'INCREMENT'
    || action.type === 'INCREMENT_IF_ODD'
  ) {
  }
  switch (action.type) {
    case 'PING':
      return {
        ...state,
        isPinging: true,
      };

    case 'PONG':
      return {
        ...state,
        isPinging: false,
      };

    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        [action.payload.login]: action.payload
      };

    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

