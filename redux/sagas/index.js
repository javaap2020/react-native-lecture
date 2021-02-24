import { fork } from 'redux-saga/effects'
import tasksSaga from './tasks'

export default function* rootSaga() {
  yield fork(tasksSaga)
  // yield fork(bookmarksSaga)
  // yield fork(likesSaga)
  // yield fork(profileSaga)
}