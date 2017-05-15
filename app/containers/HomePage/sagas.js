import { take, call, put, select, fork} from 'redux-saga/effects';
import request from 'utils/request';
import {SCRIPT_FETCH_REQUESTED, SCRIPT_FETCH_SUCCEEDED, SCRIPT_FETCH_FAILED} from './constants'

export function* fetchScript(action) {
   try {
      const requestURL = '/api/script';
      const script = yield call(request, requestURL);
      yield put({type: SCRIPT_FETCH_SUCCEEDED, script: script});
   } catch (e) {
      yield put({type: SCRIPT_FETCH_FAILED, message: e.message});
   }
}

// Individual exports for testing
export function* defaultSaga() {

  while (true) {
    const action = yield take(SCRIPT_FETCH_REQUESTED) // correct
    yield fetchScript(action)
  }

}

// All sagas to be loaded
export default [
  defaultSaga,
];
