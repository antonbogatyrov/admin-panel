import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomComponent extends Component {
  static propTypes = {
    home: PropTypes.string,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    home: 'Home',
  };

  state = {
    hello: 'hello',
  };

  render() {
    const { hello } = this.state;
    const { home, classes } = this.props;
    return (
      <div className={classes.base}>
        {hello} {home}
      </div>
    );
  }
}

export default CustomComponent;
