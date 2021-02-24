// ActionCreator
export const addTask = payload => (
  // Action -> Design pattern: Command Pattern
  {
    type: 'ADD_TASK',
    payload
  }
)

export const removeTask = payload => ({
  type: 'REMOVE_TASK',
  payload
})