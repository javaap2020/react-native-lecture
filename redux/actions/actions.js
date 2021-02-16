export const addAction = payload => ({
  type: 'ADD_ACTION',
  payload
})

export const removeAction = payload => ({
  type: 'REMOVE_ACTION',
  payload
})

export const fetchActions = () => ({
  type: 'FETCH_ACTIONS'
})