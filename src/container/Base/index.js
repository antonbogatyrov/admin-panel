import { connect } from 'react-redux';

import Component from './Component';
import { mapStateToProps, mapDispatchToFunc } from './controller';

export default connect(mapStateToProps, mapDispatchToFunc)(Component);
