import PropTypes from 'prop-types';

import classes from './ContentWrapper.module.scss';

function ContentWrapper({ children }) {
  return (<div className={classes.contentWrapper}>{children}</div>);
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
