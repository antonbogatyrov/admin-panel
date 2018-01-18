
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Template } from './container';
import reducer from './reducer';
import MaterialTheme from './MaterialTheme';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default () => (
  <Provider store={store}>
    <MaterialTheme>
      <Template>
        <div>
          hello world
        </div>
      </Template>
    </MaterialTheme>
  </Provider>
);
