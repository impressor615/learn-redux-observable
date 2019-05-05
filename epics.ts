import { XMLHttpRequest } from 'xmlhttprequest';
import { ajax } from 'rxjs/ajax';
import { mapTo, delay, mergeMap, map, filter } from 'rxjs/operators';
import { Epic, ofType, combineEpics } from 'redux-observable';

const pingEpic: Epic = action$ => action$.pipe(
  ofType('PING'),
  delay(1000),
  mapTo({ type: 'PONG' }),
);

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const fetchUser = (username: string) => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = (payload: object) => ({ type: FETCH_USER_FULFILLED, payload });

const fetchUserEpic: Epic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action =>
    ajax({
      createXHR: () => new XMLHttpRequest(),
      crossDomain: true,
      withCredentials: false,
      method: 'GET',
      url:`https://api.github.com/users/${action.payload}`, 

    }).pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);

const INCREMENT = 'INCREMENT';
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
const increment = () => ({ type: INCREMENT });
const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
const incrementIfOddEpic: Epic = (action$, state$) => action$.pipe(
  ofType(INCREMENT_IF_ODD),
  filter(() => state$.value.pingReducer.counter % 2 === 1),
  map(() => increment())
);


export default combineEpics(
  pingEpic,
  fetchUserEpic,
  incrementIfOddEpic,
);
