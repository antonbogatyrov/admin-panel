import { createActions } from 'redux-actions';

import action from './action';

export default {
  init: createActions(action.INIT),
};
