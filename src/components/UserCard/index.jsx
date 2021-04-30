import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './UserCard.module.scss';
import userPlaceholderImg from '../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import { addDefaultSrc, isEllipsisActive } from '../utils/fixUserCard';

const UserCard = ({
  avatarSrc, name, position, email, phone, isLoaded,
}) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const nameCurr = nameRef.current;
      const emailCurr = emailRef.current;

      if (nameCurr && isEllipsisActive(nameCurr)) {
        nameCurr.dataset.tip = nameCurr.textContent;
      }
      if (emailCurr && isEllipsisActive(emailCurr)) {
        emailCurr.dataset.tip = emailCurr.textContent;
      }
    }
  }, [nameRef, emailRef]);
  const addDefaultSrcBound = addDefaultSrc(userPlaceholderImg);

  const nameClasses = classNames('h4', classes.name);
  const positionClasses = classNames('p3', classes.position);
  const emailClasses = classNames('p3', classes.email);
  const phoneClasses = classNames('p3', classes.phone);

  if (isLoaded) {
    return (
      <article>
        <img
          src={avatarSrc}
          onError={addDefaultSrcBound}
          className={classes.avatar}
          alt="User"
        />
        <div className={classes.textWrapper}>
          <h4 className={nameClasses}>{name}</h4>
          <p className={positionClasses}>{position}</p>
          <p className={emailClasses}>{email}</p>
          <p className={phoneClasses}>{phone}</p>
        </div>
      </article>
    );
  }
  return (
    <article className={classes.UserCardPlaceholder}>
      <div className={classes.avatarPlaceholder} />
      <div className={classes.textWrapperPlaceholder}>
        <div className={classes.namePlaceholder} />
        <div className={classes.positionPlaceholder} />
        <div className={classes.emailPlaceholder} />
        <div className={classes.phonePlaceholder} />
      </div>
    </article>
  );
};

UserCard.defaultsProps = {
  avatarSrc: userPlaceholderImg,
  name: '',
  position: '',
  email: '',
  phone: '',
  isLoaded: false,
};

UserCard.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  isLoaded: PropTypes.bool,
};

export default UserCard;
