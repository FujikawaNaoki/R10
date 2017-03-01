import { combineReducers } from 'redux'

import { NavigationReducer } from '@exponent/ex-navigation'
import conductsReducer from './modules/conductsReducer'
import isLoadingReducer from './modules/isLoadingReducer'

export default combineReducers({
  navigation: NavigationReducer,
  conducts: conductsReducer,
  isLoading: isLoadingReducer
})
