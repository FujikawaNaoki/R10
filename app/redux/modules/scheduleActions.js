import { loadingResource, doneLoading } from './isLoadingActions'

export const loadSchedule = schedule => ({
  type: 'LOAD_SCHEDULE',
  payload: schedule
})

export const fetchSchedule = () => dispatch => {
  const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json'

  dispatch(loadingResource())
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadSchedule(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`))
}
