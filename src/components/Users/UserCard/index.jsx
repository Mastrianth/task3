import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import classes from './UserCard.module.scss';
import userPlaceholderImg from '../../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import { addDefaultSrc } from '../../../utils/fixUserCard';
import EmailWithTooltip from './fk/EmailWithTooltip';
import UsersWithTooltip from './fk/UsersWithTooltip';
import { hideUsersPlaceholder } from '../../../../redux/actions';
import { getIsInitialLoadingComplete, selectUsersPlaceholder } from '../../../../redux/reducers/users';

const UserCard = ({
  avatarSrc, name, position, email, phone, isLoaded, id,
}) => {
  const addDefaultSrcBound = addDefaultSrc(userPlaceholderImg);
  const showUsersPlaceholders = useSelector((state) => selectUsersPlaceholder(state));
  const isInitialLoadingComplete = useSelector((state) => getIsInitialLoadingComplete(state));
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitialLoadingComplete) {
      dispatch(hideUsersPlaceholder());
    }
  }, []);

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
              loading="lazy"
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
  }
  if (showUsersPlaceholders) {
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
  }
  return null
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
