import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './UserCard.module.scss';
import userPlaceholderImg from '../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import { addDefaultSrc, isEllipsisActive } from '../utils/fixUserCard';
import EmailWithTooltip from './fk/EmailWithTooltip';
import UsersWithTooltip from './fk/UsersWithTooltip';

const UserCard = ({
  avatarSrc, name, position, email, phone, isLoaded, id,
}) => {
  // const nameRef = useRef(null);
  // const emailRef = useRef(null);

  // useEffect(() => {
  //   if (isLoaded) {
  //     const nameCurr = nameRef.current;
  //     const emailCurr = emailRef.current;
  //
  //     if (nameCurr && isEllipsisActive(nameCurr)) {
  //       nameCurr.dataset.tip = nameCurr.textContent;
  //     }
  //     if (emailCurr && isEllipsisActive(emailCurr)) {
  //       emailCurr.dataset.tip = emailCurr.textContent;
  //     }
  //   }
  // }, [nameRef, emailRef]);
  const addDefaultSrcBound = addDefaultSrc(userPlaceholderImg);

  // const nameClasses = classNames('h4', classes.name);
  // const positionClasses = classNames('p3', classes.position);
  // const emailClasses = classNames('p3', classes.email);
  // const phoneClasses = classNames('p3', classes.phone);

  if (isLoaded) {
    const formattedNumber = `${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(6, 9)} ${
      phone.slice(9, 11)} ${phone.slice(11)}`;
    return (useMemo(() => (
      <div className={classes.usersCard} key={id} itemScope itemType="https://schema.org/Person">
        <div className={classes.userCardBorder}>
          <div className={classes.imageContainer}>
            <img
              onError={addDefaultSrcBound}
              src={avatarSrc}
              className={classes.image}
              alt="user photo"
            />
          </div>
          <div className={classes.nameContainer}>
            <UsersWithTooltip username={name} nameForClass={classes.cardTitle} />
          </div>
          <p className={classes.position} itemProp="jobTitle">{position}</p>
          <EmailWithTooltip email={email} nameForClass={classes.mail} />
          <a href={`tel:${phone}`} className={classes.phone} itemProp="phone">{formattedNumber}</a>
        </div>
      </div>
    ), [id])
    );

    // (
    //   <article>
    //     <img
    //       src={avatarSrc}
    //       onError={addDefaultSrcBound}
    //       className={classes.avatar}
    //       alt="User"
    //     />
    //     <div className={classes.textWrapper}>
    //       <h4 className={nameClasses}>{name}</h4>
    //       <p className={positionClasses}>{position}</p>
    //       <p className={emailClasses}>{email}</p>
    //       <p className={phoneClasses}>{phone}</p>
    //     </div>
    //   </article>
    // );
  }
  return (
    <div className={classNames(classes.usersCard, classes.placeholderCard)} key={id}>
      <div className={classes.imageContainer}>
        <div className={classes.imagePlaceholder} />
      </div>
      <h3 className={classes.namePlaceholder} />
      <p className={classes.positionPlaceholder} />
      <p className={classes.emailPlaceholder} />
      <p className={classes.phonePlaceholder} />
    </div>
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
  id: PropTypes.bool,
};

export default React.memo(UserCard);
