import React, { memo } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import classes from './IconButton.module.scss';
import { getIsPageLoaded } from '../../../redux/reducers/ui';

function IconButton({
  children,
  type,
  href,
  onClick,
  isSecondary,
  isDisabled,
  isCentered,
  className,
}) {
  const isPageLoaded = useSelector((state) => getIsPageLoaded(state));

  const cx = classNames.bind(classes);
  const IconButtonClasses = cx(
    'IconButton',
    className,
    {
      loaded: isPageLoaded,
      secondary: isSecondary,
      centered: isCentered,
      disabled: isDisabled,
    },
  );

  if (href) {
    return (
      <a
        href={isDisabled ? 'javascript:;' : href}
        className={IconButtonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={IconButtonClasses}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  type: 'button',
  href: null,
  onClick: null,
  isSecondary: false,
  isDisabled: false,
  isCentered: false,
  className: null,
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isSecondary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCentered: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(IconButton);
