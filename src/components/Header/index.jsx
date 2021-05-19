import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import MyContext from '../../utils/context';
import Menu from './Menu/Menu';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import { withTranslation } from '../../../i18n';

import styles from './Header.module.scss';
import Cookies from './Cookies';
import { selectApiError } from '../../../redux/reducers/ui';
// import BurgerMenu from './BurgerMenu/BurgerMenu';
const BurgerMenu = dynamic(() => import('./BurgerMenu/BurgerMenu'));

function Header({
  t, openModal, userAvatar, userEmail, userName, isUserLoaded, showButton,
}) {
  const [burgerActive, setActive] = useState(false);
  const { isGoogleSpeedTest } = useContext(MyContext);
  const isApiError = useSelector(selectApiError);
  // const [isApiError, setIsApiError] = useState(false);
  const closeBurgerMenu = () => setActive(false);
  const openBurgerMenu = () => setActive(true);

  return (
    <>
      {isGoogleSpeedTest ? null
        : (
          <div className={isApiError ? classNames(styles.connectionError, styles.active) : styles.connectionError}>
            <div className={styles.errorContainer}>
              <div className={styles.connectionErrorContainer}>
                <div>
                  {t('apiError')}
                </div>
                <div className={styles.buttonContainer}>
                  <ButtonComponent
                    onClick={() => window.location.reload()}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    disabled={false}
                    label={t('Try again')}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      <div className={isApiError ? classNames(styles.header, styles.error) : styles.header}>
        {isGoogleSpeedTest ? null
          : <BurgerMenu userAvatar={userAvatar} openModal={openModal} burgerActive={burgerActive} closeBurgerMenu={closeBurgerMenu} />}
        <div className="container">
          <Menu
            openModal={openModal}
            openBurgerMenu={openBurgerMenu}
            userName={userName}
            userEmail={userEmail}
            userAvatar={userAvatar}
            isUserLoaded={isUserLoaded}
            showButton={showButton}
          />
        </div>
      </div>
      {isGoogleSpeedTest ? null
        : <Cookies />}
    </>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  openModal: PropTypes.func,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  isUserLoaded: PropTypes.bool,
  showButton: PropTypes.bool,
};

export default withTranslation('common')(Header);
