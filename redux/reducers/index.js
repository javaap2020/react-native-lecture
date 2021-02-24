import { combineReducers } from 'redux'
import tasks from './tasks'
import alert from './alert'

// 여러개의 리듀서를 합친 리듀서를 만듦
const rootReducer = combineReducers({
  tasks, alert,
})

export default rootReducer;