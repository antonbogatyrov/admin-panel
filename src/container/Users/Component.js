import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomComponent extends Component {
  static propTypes = {
    users: PropTypes.string,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    users: 'Users',
  };

  state = {
    hello: 'hello',
  };

  render() {
    const { hello } = this.state;
    const { users, classes } = this.props;
    return (
      <div className={classes.base}>
        {hello} {users}
      </div>
    );
  }
}

export default CustomComponent;
