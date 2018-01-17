import { createAction } from 'redux-actions';

import action from './action';

export default {
  open: createAction(action.SNACK_BAR_OPEN),
  close: createAction(action.SNACK_BAR_CLOSE),
};
