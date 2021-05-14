import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import classNames from 'classnames/bind';
import classes from './NavLink.module.scss';

function NavLink({
  to, onClick, children, isWhite, isVertical, className,
}) {
  const cx = classNames.bind(classes);
  const navItemClasses = cx('nav-item', { vertical: isVertical });
  const navLinkClasses = cx('nav-link', className, { white: isWhite });

  const link = to === '#' ? (
    <a
      href="#"
      onClick={onClick}
      className={navLinkClasses}
    >
      {children}
    </a>
  ) : (
    <Link
      activeClass="nav-link_active"
      className={navLinkClasses}
      to={to}
      onClick={onClick}
      spy
      smooth
      duration={500}
    >
      {children}
    </Link>
  );

  return (
    <li className={navItemClasses}>
      {link}
    </li>
  );
}

NavLink.defaultProps = {
  onClick: null,
  isWhite: false,
  isVertical: false,
  className: null,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  isWhite: PropTypes.bool,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
};

export default NavLink;
