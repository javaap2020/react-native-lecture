import { combineReducers } from 'redux'
import tasks from './tasks'

// 여러개의 리듀서를 합친 리듀서를 만듦
const rootReducer = combineReducers({
  tasks,
})

export default rootReducer;