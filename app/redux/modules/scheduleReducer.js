import {formatSessionData} from '../../helpers/dataFormatHelpers'

const initialState = {
  sessionData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  }
}

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_SCHEDULE':
      return { sessionData: formatSessionData(action.payload) }
    default:
      return state
  }
}

export default scheduleReducer
