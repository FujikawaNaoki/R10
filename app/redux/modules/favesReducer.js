import realm, { isFave, createFave, deleteFave } from '../../config/models'

const favesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVES':
      return action.payload
    case 'TOGGLE_FAVE':
      if (isFave(realm, action.payload)) {
        deleteFave(realm, action.payload)
        return [...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1),]
      } else {
        createFave(realm, action.payload)
        return [...state, action.payload]
      }
    default:
      return state
  }
}

export default favesReducer 
