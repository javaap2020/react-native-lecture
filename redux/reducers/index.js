import { combineReducers } from 'redux'
import actions from './actions'

// 여러개의 리듀서를 합친 리듀서를 만듦
const rootReducer = combineReducers({
  actions,
})

export default rootReducer;