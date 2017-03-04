import { loadingResource, doneLoading } from './isLoadingActions'

export const loadSession = sessions => ({
  type: 'LOAD_SCHEDULE',
  payload: sessions
})

export const fetchSessions = () => dispatch => {
  const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json'

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadSession(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
