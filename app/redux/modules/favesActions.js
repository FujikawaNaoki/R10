import realm, { getAllFaves } from '../../config/models'

export const loadFaves = () => ({
  type: 'LOAD_FAVES',
  payload: getAllFaves(realm)
})

export const toggleFave = sessionId => ({
  type: 'TOGGLE_FAVE',
  payload: sessionId,
})
