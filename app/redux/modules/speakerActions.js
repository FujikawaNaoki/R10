import { loadingResource, doneLoading } from './isLoadingActions'

export const loadSpeaker = speaker => ({
  type: 'LOAD_SPEAKER',
  payload: speaker
})

export const fetchSpeaker = speakerId => dispatch => {
  const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${speakerId}%22`

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadSpeaker(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
