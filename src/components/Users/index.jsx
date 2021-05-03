import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from '../../../i18n';
import ContentWrapper from '../ContentWrapper';
import { fetchUsers } from '../../../redux/actions';
import { getIsUserBtnSpinnerActive } from '../../../redux/reducers/ui';
import { getApiUsersLength, getIsInitialLoadingComplete, getUsers } from '../../../redux/reducers/users';

import classes from './Users.module.scss';
import UserCard from '../UserCard';
import Button from '../Button';
import Preloader from '../Preloader/Preloader';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';

const Users = ({ t }) => {
  const dispatch = useDispatch();

  const isUserBtnSpinnerActive = useSelector((state) => getIsUserBtnSpinnerActive(state));
  const users = useSelector((state) => getUsers(state));
  const apiUsersLength = useSelector((state) => getApiUsersLength(state));
  const isInitialLoadingComplete = useSelector((state) => getIsInitialLoadingComplete(state));

  useEffect(() => {
    dispatch(fetchUsers(users.length));
  }, []);

  const headingClasses = classNames('h2', classes.heading);
  const subheadingClasses = classNames('h5', classes.subheading);
  const containerClasses = classNames(classes.container, { [classes.isLoading]: !isInitialLoadingComplete });

  const btnContent = isUserBtnSpinnerActive
    ? <Preloader />
    : t('users-button');

  const button = users.length >= apiUsersLength ? null : (
  // <Button
  //   onClick={() => dispatch(fetchUsers(users.length))}
  //   variant="secondary"
  //   isCentered
  //   className={classes.button}
  //   isDisabled={isUserBtnSpinnerActive}
  // >
  //   {btnContent}
  // </Button>
    <div className={classes.button}>
      <ButtonComponent
        onClick={() => dispatch(fetchUsers(users.length))}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        disabled={false}
        label={t('users-button')}
      >
        {' '}
        {btnContent}
      </ButtonComponent>
    </div>

  );

  const usersCard = users.map(({
    id, name, position, email, phone, avatarSrc, isLoaded,
  }) => (
    <UserCard
      name={name}
      position={position}
      email={email}
      avatarSrc={avatarSrc}
      phone={phone}
      isLoaded={isLoaded}
      key={id}
    />
  ));

  return (
    <section className={classes.Users} id="users">
      <ContentWrapper>
        <h2 className={headingClasses}>{t('users-text')}</h2>
        <h3 className={subheadingClasses}>{t('best')}</h3>

        <div className={containerClasses}>
          {usersCard}
        </div>
        {button}
      </ContentWrapper>
    </section>
  );
};

Users.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Users);