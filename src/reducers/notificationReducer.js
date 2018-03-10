const messageAtStart = null
  

  
const notificationReducer = (state = messageAtStart, action) => {

  switch (action.type) {
    case 'CREATE_NOT':
    return action.youDid + action.content
    case 'DELETE':
    return ''
  }
    return state
  }

  export const createNewNot = (youDid, content) => {
    return {
      type: 'CREATE_NOT',
      youDid,
      content
    }
  }

  export const remove = () => {
    return {
      type: 'DELETE'
    }
  }

  
  export default notificationReducer