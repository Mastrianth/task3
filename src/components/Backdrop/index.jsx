import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import classes from './Backdrop.module.scss';

function Backdrop({
  onClick, isActive, zIndex, backgroundColor,
}) {
  const cx = classNames.bind(classes);
  const backDropClasses = cx('Backdrop', { active: isActive });

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor,
        zIndex,
      }}
      className={backDropClasses}
    />
  );
}

Backdrop.defaultProps = {
  isActive: false,
  zIndex: '999',
  backgroundColor: 'rgba(22,12,13, 0.32)',
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  zIndex: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Backdrop;
