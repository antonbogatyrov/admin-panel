import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Template } from '../container';
import Main from './Main';

export default () => (
  <BrowserRouter>
    <Template>
      <Main />
    </Template>
  </BrowserRouter>
);
