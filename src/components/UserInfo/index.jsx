import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '../IconButton';
import userPlaceholderImg from '../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import LogOutIcon from '../../assets/img/svg/exit.svg';
import classes from './UserInfo.module.scss';

const UserInfo = ({
  userName, userEmail, userAvatar, logOut, isLoaded, isOnSideBar,
}) => {
  const userInfoClasses = classNames(classes.UserInfo, { [classes.onSideBar]: isOnSideBar });
  const nameClasses = classNames('p3', classes.name);
  const userInfo = isLoaded ? (
    <>
      <img src={userAvatar} alt={userName} className={classes.avatar} />
      <div className={classes.container}>
        <p className={nameClasses}>{userName}</p>
        <p className={classes.email}>{userEmail}</p>
      </div>

    </>
  ) : (
    <>
      <div className={classes.loadingAvatar} />
      <div className={classes.container}>
        <div className={classes.loadingName} />
        <div className={classes.loadingEmail} />
      </div>
    </>
  );

  return (
    <div className={userInfoClasses}>
      {userInfo}
      {/*<IconButton isSecondary onClick={logOut} className={classes.logOutButton}>*/}
      {/*  <LogOutIcon className={classes.logOutIcon} />*/}
      {/*</IconButton>*/}
    </div>
  );
};

UserInfo.defaultProps = {
  userAvatar: userPlaceholderImg,
  isLoaded: false,
  isOnSideBar: false,
};

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  logOut: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  isOnSideBar: PropTypes.bool,
};

export default UserInfo;
