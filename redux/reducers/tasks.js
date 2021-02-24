// ex)
// Like 목록을 제어하는 리듀서
// likes.js

// 태스크 목록을 제어하는 리듀서
// tasks.js

// 리듀서
// (현재state, action의리턴객체) => {
//   switch.... case.... action의 타입에 따라서 state르 제어  
//   return 변경할state 
// }

const tasks = (state = [], action) => {
  // action의 type별로 state 제어
  switch (action.type) {
    case 'ADD_TASK_SUCCEEDED':
      // return 변경할state
      // 현재 state를 복사하여 변경
      return [
        // state 배열 요소들을 카피 
        // state == [{}, {}] ...state -> {}, {}
        ...state, 
        // paylod 객체 카피
        {
          ...action.payload
        }
      ]
    case 'REMOVE_TASK_SUCCEEDED':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    case 'FETCH_TASKS_SUCCEEDED':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

export default tasks