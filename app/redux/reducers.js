import { combineReducers } from 'redux';

import { NavigationReducer } from '@exponent/ex-navigation';
import conductsReducer from './modules/conductsReducer';
import sessionReducer from './modules/sessionReducer';
import speakerReducer from './modules/speakerReducer';
import favesReducer from './modules/favesReducer';
import isLoadingReducer from './modules/isLoadingReducer';

export default combineReducers({
  navigation: NavigationReducer,
  conducts: conductsReducer,
  session: sessionReducer,
  speaker: speakerReducer,
  faves: favesReducer,
  isLoading: isLoadingReducer,
});