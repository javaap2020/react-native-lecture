import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/actions'

function* fetchActions(action) {
    console.log("-- Saga: action.type --");
    console.log(action.type);
    const result = yield call(api.list);
    // const list = yield select(state => state.actions);
    console.log("-- Saga: api result --");
    console.log(result);
    // yield put({type: "FETCH_ACTIONS_SUCCEEDED", payload: list});
    yield put({type: "FETCH_ACTIONS_SUCCEEDED", payload: result.data});
}

function* addAction(action) {
  console.log("-- Saga: action.type --");
  console.log(action.type);
  const result = yield call(api.post, action.payload);
  // const result = true;
  console.log("-- Saga: api result --")
  console.log(result.data);
  console.log("-- Saga: action.payload --");
  console.log(action.payload);
  yield put({type: "ADD_ACTION_SUCCEEDED", payload: action.payload});
}

function* removeAction(action) {
  console.log("-- Saga: action.type --");
  console.log(action.type);
  const result = yield call(api.delete, action.payload);
  // const result = true;
  console.log("-- Saga: api result --")
  console.log(result.data);
  console.log("-- Saga: action.payload --");
  console.log(action.payload);
  yield put({type: "REMOVE_ACTION_SUCCEEDED", payload: action.payload});
}


function* actionsSaga() {
  yield takeLatest("FETCH_ACTIONS", fetchActions);
  yield takeEvery("ADD_ACTION", addAction);
  yield takeEvery("REMOVE_ACTION", removeAction);
}

export default actionsSaga;