import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';

const CustomComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

CustomComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomComponent;
