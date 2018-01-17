import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import Component from './Component';
import { mapStateToProps, mapDispatchToFunc } from './controller';
import style from './style';

export default withStyles(style)(connect(mapStateToProps, mapDispatchToFunc)(Component));
