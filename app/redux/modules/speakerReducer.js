import { formatDataObject } from '../../helpers/dataFormatHelpers'

const initialState = {
  speakerData: {
    bio: '',
    image: 'https://facebook.github.io/react/img/logo_og.png',
    name: '',
    session: '',
    speaker_id: '',
    url: '',
  }
}

const speakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_SPEAKER':
      return { speakerData: formatDataObject(action.payload) }
    default:
      return state
  }
}

export default speakerReducer
