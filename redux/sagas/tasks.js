import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/tasks'

function* fetchTasks(action) {
    console.log("-- Saga: action.type --");
    console.log(action.type);
    const result = yield call(api.list);
    // const list = yield select(state => state.tasks);
    console.log("-- Saga: api result --");
    console.log(result);
    // yield put({type: "FETCH_TASKS_SUCCEEDED", payload: list});
    yield put({type: "FETCH_TASKS_SUCCEEDED", payload: result.data});
}

function* addTask(action) {
  console.log("-- Saga: action.type --");
  console.log(action.type);
  const result = yield call(api.post, action.payload);
  // const result = true;
  console.log("-- Saga: api result --")
  console.log(result.data);
  console.log("-- Saga: action.payload --");
  console.log(action.payload);
  yield put({type: "ADD_TASK_SUCCEEDED", payload: action.payload});
}

function* removeTask(action) {
  console.log("-- Saga: action.type --");
  console.log(action.type);
  const result = yield call(api.delete, action.payload);
  // const result = true;
  console.log("-- Saga: api result --")
  console.log(result.data);
  console.log("-- Saga: action.payload --");
  console.log(action.payload);
  yield put({type: "REMOVE_TASK_SUCCEEDED", payload: action.payload});
}


function* tasksSaga() {
  yield takeLatest("FETCH_TASKS", fetchTasks);
  yield takeEvery("ADD_TASK", addTask);
  yield takeEvery("REMOVE_TASK", removeTask);
}

export default tasksSaga;