import { formatSessionData } from '../../helpers/dataFormatHelpers'

const initialState = {
  sessionData: [],
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_SCHEDULE':
      return {
        sessionData: action.payload,
      }
    default:
      return state
  }
}

export default sessionReducer
