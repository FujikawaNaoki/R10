import { loadingResource, doneLoading } from './isLoadingActions'

export const loadSpeaker = speaker => ({
  type: 'LOAD_SPEAKER',
  payload: speaker
})

export const loadFaveSpeaker = speaker => ({
  type: 'LOAD_FAVE_SPEAKER',
  payload: speaker
})

export const fetchSpeaker = (speakerId, tab) => dispatch => {
  const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${speakerId}%22`

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      switch (tab) {
        case 'Faves':
          dispatch(loadFaveSpeaker(json))
          break
        default:
          dispatch(loadSpeaker(json))
          break
      }
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
