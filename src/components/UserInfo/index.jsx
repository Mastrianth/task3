import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux';
import userPlaceholderImg from '../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import classes from './UserInfo.module.scss';
import { clearCurrentUser } from '../../../redux/actions';
import styles from '../Header/Menu/Menu.module.scss';
import Exit from '../../assets/img/svg/exit.svg';
import { removeUser, useRemoveUser } from "../utils/formHelpers";

const UserInfo = ({
  userName, userEmail, userAvatar, logOut, isLoaded, isOnSideBar, showButton,
}) => {
  const imgRef = useRef(null);
  // Create ref to show tooltip if content overflows
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const imgCurr = imgRef.current;
      const nameCurr = nameRef.current;
      const emailCurr = emailRef.current;

      // React Tooltip needs to be rebuild after new users load
      if (nameCurr) {
        nameCurr.dataset.tip = nameCurr.textContent;
        nameCurr.dataset.align = 'left';
        nameCurr.style.cursor = 'pointer';
      }
      if (emailCurr) {
        emailCurr.dataset.tip = emailCurr.textContent;
        emailCurr.dataset.align = 'left';
        emailCurr.style.cursor = 'pointer';
      }

      // preloadImgAndReplaceSrc(userAvatar, imgCurr);

      ReactTooltip.rebuild();
    }
  }, [isLoaded, imgRef]);

  const userInfoClasses = classNames('tooltip-container', classes.UserInfo, { [classes.onSideBar]: isOnSideBar });
  const nameClasses = classNames('p3', classes.name);
  const dispatch = useDispatch();
  const userInfo = isLoaded ? (
    <>
      <img ref={imgRef} src={userAvatar} alt={userName} itemProp="image" className={classes.avatar} />
      <div className={classes.container}>
        <p ref={nameRef} className={nameClasses}>{userName}</p>
        <p ref={emailRef} className={classes.email}>{userEmail}</p>
      </div>

    </>
  ) : showButton ? (
    <>
      <div className={classes.loadingAvatar} />
      <div className={classes.container}>
        <div className={classes.loadingName} />
        <div className={classes.loadingEmail} />
      </div>
    </>
  ) : null;
  const exitButton = (
    <>
      <a
        onClick={
          (e) => {
            dispatch(removeUser());
            e.preventDefault();
          }
        }
        href="#"
        className={styles.menuUserExit}
      >
        <Exit />
      </a>
    </>
  );

  return (
    <div className={userInfoClasses}>
      {userInfo}
      {showButton ? exitButton : null}
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
