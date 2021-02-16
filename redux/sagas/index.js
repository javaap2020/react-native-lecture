import { all, fork } from 'redux-saga/effects'

import actionsSaga from './actions'

export default function* rootSaga() {
  yield fork(actionsSaga)
}