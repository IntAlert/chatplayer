import { delay } from 'redux-saga';
import { take, all, takeEvery, call, put, select, fork} from 'redux-saga/effects';
import request from 'utils/request';
import {TIMER_START, TIMER_TICK, SCRIPT_FETCH_REQUESTED_EN, SCRIPT_FETCH_REQUESTED_FR, SCRIPT_FETCH_SUCCEEDED, SCRIPT_FETCH_FAILED} from './constants';
import {tick} from './actions';

export function* fetchScriptEN(action) {
  try {

     const requestURL = '/api/en/script';
     const script = yield call(request, requestURL);
     yield put({ type: SCRIPT_FETCH_SUCCEEDED, script });
  } catch (e) {
     yield put({ type: SCRIPT_FETCH_FAILED, message: e.message });
  }
}

export function* fetchScriptFR(action) {
  try {

     const requestURL = '/api/fr/script';
     const script = yield call(request, requestURL);
     yield put({ type: SCRIPT_FETCH_SUCCEEDED, script });
  } catch (e) {
     yield put({ type: SCRIPT_FETCH_FAILED, message: e.message });
  }
}


function* delayTick() {
  while(true) {
    yield delay(1000);
    yield put(tick());
  }
  
}

// Individual exports for testing
export function* defaultSaga() {
  yield [
    takeEvery(SCRIPT_FETCH_REQUESTED_EN, fetchScriptEN),
    takeEvery(SCRIPT_FETCH_REQUESTED_FR, fetchScriptFR),
    takeEvery(TIMER_START, delayTick),
  ];
}

// All sagas to be loaded
export default [
  defaultSaga,
];
