import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

const Component = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} type="title" color="inherit">
        Admin Panel
      </Typography>
      <div>
        <IconButton
          aria-owns="menu-appbar"
          aria-haspopup="true"
          color="contrast"
        >
          <AccountCircle />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

Component.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default Component;
