const alert = (state = {isShow:false, msg:''}, action) =>{
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        isShow: true,
        msg: action.msg
      }
    case 'CLOSE_ALERT':
      return {
        isShow: false,
        msg: ''
      }
    default:
      return state      
  }
}

export default alert;