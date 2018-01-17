import { combineReducers } from 'redux';

import auth from './auth';
import snackBar from './snackBar';

export default combineReducers({
  auth,
  snackBar,
});
