const messageAtStart = ''
  

  
const filterReducer = (state = messageAtStart, action) => {

  switch (action.type) {
    case 'CREATE_CHAR':
    return action.content
    case 'DELETE_CHAR':
    return ''
  }
    return state
  }

  export const createNewChar = (content) => {
    return {
      type: 'CREATE_CHAR',
      content
    }
  }

  export const removeChar = () => {
    return {
      type: 'DELETE_CHAR'
    }
  }

  
  export default filterReducer