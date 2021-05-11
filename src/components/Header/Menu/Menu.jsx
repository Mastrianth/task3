import React, { useContext, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { I18nContext } from 'next-i18next';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectFormFilled,
} from '../../../utils/usersSlice';
import { i18n, withTranslation } from '../../../../i18n';

import Logo from '../../../assets/img/svg/Logo.svg';
import styles from './Menu.module.scss';
import ContentWrapper from '../../ContentWrapper';
import UserInfo from '../../UserInfo';

const MobileHeader = dynamic(() => import('../MobileMenu/MobileHeader'));

const btnPrimarySmallStyles = {
  root: {
    paddingRight: '18px',
    paddingLeft: '18px',
    minWidth: '93px',
    height: '38px !important',
    fontWeight: '400',
    textTransform: 'capitalize',
    fontSize: '16px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    borderRadius: '80px !important',
    backgroundColor: '#f4e041',
    color: 'rgba(0, 0, 0, 0.87) !important',

    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#B4B4B4',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#ffe302',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',

    },
    '&:focus': {
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',
    },
    '& > span': {
      pointerEvents: 'none',
    },
  },
};

const useStylesPrimarySmall = makeStyles(() => ({ ...btnPrimarySmallStyles }));

const Menu = ({
  openBurgerMenu, t, openModal, userName, userEmail, userAvatar, isUserLoaded, showButton, logOut,
}) => {
  const { i18n: { language } } = useContext(I18nContext);
  const router = useRouter();
  const classesPrimarySmall = useStylesPrimarySmall();
  const isFormFilled = useSelector(selectFormFilled);

  const checkIfFilled = (e) => {
    if (isFormFilled) {
      openModal(e);
    }
  };

  useEffect(() => {
    if (process.browser) {
      if (window.location.hash) {
        history.replaceState(null, null, ' ');
      }
    }
  }, []);

  return (
    <ContentWrapper>
      <div className={styles.menuWrapper}>
        {router.pathname === '/'
          ? <Logo />
          : (
            <Link href="/" passHref>
              <a className={styles.logoLink}>
                <Logo />
              </a>
            </Link>
          )}
        <div className={styles.linksWrapper}>
          <span className={styles.leftMenu}>
            {router.pathname === '/'
              ? (
                <>
                  <LinkScroll
                    activeClass={styles.selected}
                    to="about-me"
                    spy
                    smooth
                    duration={500}
                  >
                    {t('about-me')}
                  </LinkScroll>
                  <LinkScroll
                    activeClass={styles.selected}
                    to="relationships"
                    spy
                    smooth
                    duration={500}
                  >
                    {t('relationship')}
                  </LinkScroll>
                  <LinkScroll
                    activeClass={styles.selected}
                    to="users"
                    spy
                    smooth
                    duration={500}
                  >
                    {t('users')}
                  </LinkScroll>
                </>
              )
              : (
                <>
                  <Link scroll={false} href="/#about-me"><a onClick={(e) => checkIfFilled(e)}>{t('about-me')}</a></Link>
                  <Link scroll={false} href="/#relationships"><a onClick={(e) => checkIfFilled(e)}>{t('relationship')}</a></Link>
                  <Link scroll={false} href="/#users"><a onClick={(e) => checkIfFilled(e)}>{t('users')}</a></Link>
                </>
              )}

          </span>

          <MobileHeader openBurgerMenu={openBurgerMenu} />
          <span className={styles.rightMenu}>
            <span className={styles.langMenu}>
              <button
                type="button"
                className={language !== 'de' ? styles.selected : null}
                onClick={(e) => {
                  i18n.changeLanguage('en');
                }}
              >
                En
              </button>
              <button
                type="button"
                className={language === 'de' ? styles.selected : null}
                onClick={(e) => {
                  i18n.changeLanguage('de');
                }}
              >
                De
              </button>
            </span>
            <>
              <span className={styles.authorizedMenu}>
                <UserInfo
                  userName={userName}
                  userEmail={userEmail}
                  userAvatar={userAvatar}
                  logOut={logOut}
                  isLoaded={isUserLoaded}
                  showButton={showButton}
                />
              </span>
            </>
            {!isUserLoaded
              ? (
                <span className={styles.buttonContainer}>
                  <Button
                    onClick={
                  router.pathname === '/sign-up'
                    ? () => document.getElementById('sign-up').scrollIntoView({ behavior: 'smooth' })
                    : () => router.push('/sign-up').then(() => window.scrollTo(0, 0))
                }
                    variant="contained"
                    className={classesPrimarySmall.root}
                  >
                    {t('sign-up')}
                  </Button>
                </span>
              )
              : null}
          </span>
        </div>

      </div>
    </ContentWrapper>
  );
};

Menu.getInitialProps = async () => ({
  namespacesRequired: ['menu'],
});

Menu.propTypes = {
  t: PropTypes.func.isRequired,
  openModal: PropTypes.func,
  openBurgerMenu: PropTypes.func,
};

export default React.memo(withTranslation('common')(Menu));
