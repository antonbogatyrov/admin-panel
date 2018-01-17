import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../component';

const CustomComponent = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

CustomComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomComponent;
