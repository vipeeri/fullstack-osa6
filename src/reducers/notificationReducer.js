const messageAtStart = null
  

export const actionCreatorNotification = {
  createNewNot(youDid, content) {
    return {
      type: 'CREATE_NOT',
      youDid,
      content
    }
  }
}

  
const notificationReducer = (state = messageAtStart, action) => {

  switch (action.type) {
    case 'CREATE_NOT':
    return action.youDid + action.content
  }
    return state
  }

  
  export default notificationReducer