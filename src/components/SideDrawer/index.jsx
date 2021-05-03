import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withTranslation } from '../../../i18n';

import Backdrop from '../Backdrop';
import NavLink from '../NavLink';

import classes from './SideDrawer.module.scss';
import UserInfo from '../UserInfo';

function SideDrawer({ isActive, deactivate, t }) {
  const cx = classNames.bind(classes);

  const sideDrawerClasses = cx('SideDrawer', { active: isActive });

  return (
    <>
      <section className={sideDrawerClasses}>
        <UserInfo isLoaded userName="Maximilian" userEmail="MaximilianMaximilian@gmail.com" logOut={() => { console.log('Log out'); }} isOnSideBar />
        <nav className={classes.menu}>
          <ul className={classes.menu_ul}>
            <NavLink href="/" anchor="about-me" onClick={deactivate} isVertical classNameListItem={classes.navLink}>{t('About me')}</NavLink>
            <NavLink href="/" anchor="relationships" onClick={deactivate} isVertical classNameListItem={classes.navLink}>{t('Relationships')}</NavLink>
            <NavLink href="/" anchor="users" onClick={deactivate} isVertical classNameListItem={classes.navLink}>{t('Users')}</NavLink>
            <NavLink href="/sign-up" anchor="sign-up" onClick={deactivate} isVertical classNameListItem={classes.navLink}>{t('Sign Up')}</NavLink>
            <NavLink href="/terms" onClick={deactivate} isVertical classNameListItem={classes.navLink}>{t('Terms and Conditions')}</NavLink>
          </ul>
        </nav>
      </section>
      <Backdrop isActive={isActive} onClick={deactivate} />
    </>
  );
}

SideDrawer.defaultProps = {
  isActive: false,
};

SideDrawer.propTypes = {
  isActive: PropTypes.bool,
  deactivate: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SideDrawer);
