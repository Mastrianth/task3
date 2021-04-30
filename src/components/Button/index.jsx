import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import classNames from 'classnames/bind';
import classes from './Button.module.scss';

function Button({
  children,
  type,
  href,
  idToAnchor,
  onClick,
  variant,
  isSmall,
  isDisabled,
  isCentered,
  className,
}) {
  const cx = classNames.bind(classes);

  const buttonClasses = cx(
    'button',
    className,
    {
      secondary: variant === 'secondary',
      flat: variant === 'flat',
      centered: isCentered,
      disabled: isDisabled,
      small: isSmall,
    },
  );

  if (idToAnchor) {
    return (
      <Link
        href={isDisabled ? null : href}
        className={buttonClasses}
        to={idToAnchor}
        smooth
        duration={500}
      >
        <div className={classes.buttonText}>{children}</div>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={isDisabled ? 'javascript:;' : href}
        className={buttonClasses}
      >
        <div className={classes.buttonText}>{children}</div>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
    >
      <div className={classes.buttonText}>{children}</div>
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  href: null,
  idToAnchor: null,
  onClick: null,
  variant: 'primary',
  isSmall: false,
  isDisabled: false,
  isCentered: false,
  className: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  href: PropTypes.string,
  idToAnchor: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'flat']),
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCentered: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
