import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import LogOutIcon from '../../assets/img/svg/exit.svg';
import classes from './UserInfo.module.scss';

const UserInfo = ({
  userName, userEmail, userAvatar, logOut, isLoaded,
}) => {
  const userInfo = isLoaded ? (
    <>
      <img src={userAvatar} alt={userName} className={classes.avatar} />
      <div className={classes.container}>
        <p className={`p3 ${classes.name}`}>{userName}</p>
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
    <div className={classes.UserInfo}>
      {userInfo}
      <IconButton isSecondary onClick={logOut} className={classes.logOutButton}>
        <LogOutIcon className={classes.logOutIcon} />
      </IconButton>
    </div>
  );
};

UserInfo.defaultProps = {
  userAvatar: null,
  isLoaded: false,
};

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  logOut: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
};

export default UserInfo;
