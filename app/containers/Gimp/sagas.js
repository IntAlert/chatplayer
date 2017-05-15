import { take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

function* fetchScript(action) {
   try {
      const requestURL = '/api/script';
      const script = yield call(request, requestURL);
      yield put({type: "SCRIPT_FETCH_SUCCEEDED", script: script});
   } catch (e) {
      yield put({type: "SCRIPT_FETCH_FAILED", message: e.message});
   }
}

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  
  yield take("borderbot/Home/SCRIPT_FETCH_REQUESTED", fetchScript);

}

// All sagas to be loaded
export default [
  defaultSaga,
];
