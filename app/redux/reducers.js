import { combineReducers } from 'redux';

import { NavigationReducer } from '@exponent/ex-navigation';
import conductsReducer from './modules/conductsReducer';
import scheduleReducer from './modules/scheduleReducer';
import isLoadingReducer from './modules/isLoadingReducer';

export default combineReducers({
  navigation: NavigationReducer,
  conducts: conductsReducer,
  schedule: scheduleReducer,
  isLoading: isLoadingReducer,
});