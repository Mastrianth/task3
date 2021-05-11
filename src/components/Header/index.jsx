import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import MyContext from '../../utils/context';
import Menu from './Menu/Menu';

import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';
import { withTranslation } from '../../../i18n';
import { selectApiError } from '../../utils/usersSlice';

import styles from './Header.module.scss';
// import BurgerMenu from './BurgerMenu/BurgerMenu';
const BurgerMenu = dynamic(() => import('./BurgerMenu/BurgerMenu'));

function Header({ t, openModal, userAvatar, userEmail, userName, isUserLoaded, showButton }) {
  const [burgerActive, setActive] = useState(false);
  const { isGoogleSpeedTest } = useContext(MyContext);
  const isApiError = useSelector(selectApiError);
  const [showCookiesPolicy, setShowCookiesPolicy] = useState(true);
  const closeBurgerMenu = () => setActive(false);
  const openBurgerMenu = () => setActive(true);

  return (
    <>
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
      <div className={isApiError ? classNames(styles.header, styles.error) : styles.header}>
        {isGoogleSpeedTest ? null
          : <BurgerMenu openModal={openModal} burgerActive={burgerActive} closeBurgerMenu={closeBurgerMenu} />}
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

      <div className={showCookiesPolicy ? classNames(styles.cookiePolicy, styles.active) : styles.cookiePolicy}>
        <div className="container">
          <div className={styles.cookiePolicyContainer}>
            <div>
              {t('cookie-policy-text')}
              {' '}
              <a href="#" className={styles.cookieLink}>{t('Cookies Policy')}</a>
            </div>
            <div className={styles.buttonCookieContainer}>
              <ButtonComponent
                onClick={() => setShowCookiesPolicy(false)}
                variant="outlined"
                color="secondary"
                size="small"
                disabled={false}
                label={t('Got it')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  openModal: PropTypes.func,
};

export default withTranslation('common')(Header);
