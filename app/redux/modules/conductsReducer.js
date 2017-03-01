const conductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CONDUCTS':
      return action.payload
    default:
      return state
  }
}

export default conductsReducer
