import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ hello, world }) => (
  <div>
    {hello} {world}
  </div>
);

Component.propTypes = {
  hello: PropTypes.string,
  world: PropTypes.string,
};

Component.defaultProps = {
  hello: 'hello',
  world: 'word',
};

export default Component;
