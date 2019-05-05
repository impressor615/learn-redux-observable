import { mapTo, delay } from 'rxjs/operators';
import { Epic, ofType, combineEpics } from 'redux-observable';

const pingEpic: Epic = action$ => action$.pipe(
  ofType('PING'),
  delay(1000),
  mapTo({ type: 'PONG' }),
);

export default combineEpics(
  pingEpic,
);
