import { loadingResource, doneLoading } from './isLoadingActions';

export const loadConducts = conducts => ({
  type: 'LOAD_CONDUCTS',
  payload: conducts,
});

export const fetchConducts = lessonId => dispatch => {
  const endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
  
  dispatch(loadingResource());
  fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      dispatch(loadConducts(json))
      dispatch(doneLoading())
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));

};
