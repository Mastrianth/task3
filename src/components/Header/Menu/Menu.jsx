import React, { useContext, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { I18nContext } from 'next-i18next';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { i18n, withTranslation } from '../../../../i18n';

import Logo from '../../../assets/img/svg/Logo.svg';
import styles from './Menu.module.scss';
import ContentWrapper from '../../ContentWrapper';
import UserInfo from '../../Users/UserInfo';
import { setCurrentUser, showSuccessPopup } from '../../../../redux/actions';
import { getCurrentUser } from '../../../../redux/reducers/auth';

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
  openBurgerMenu, t, userName, userEmail, userAvatar, isUserLoaded, showButton, logOut,
}) => {
  const { i18n: { language } } = useContext(I18nContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const classesPrimarySmall = useStylesPrimarySmall();
  const authorizedUserData = useSelector(getCurrentUser);

  useEffect(() => {
    if (process.browser) {
      if (window.location.hash) {
        history.replaceState(null, null, ' ');
      }
    }
    const user = localStorage.getItem('user');
    if (user) {
      const userJson = JSON.parse(user);
      dispatch(setCurrentUser(userJson.user));
    }
  }, []);

  const checkIfFilled = () => {
    const checkForm = localStorage.getItem('form');
    if (checkForm) {
      dispatch(showSuccessPopup());
    }
  };

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
                  <Link scroll={false} href="/#about-me" onClick={(e) => checkIfFilled(e)}>{t('about-me')}</Link>
                  <Link scroll={false} href="/#relationships" onClick={(e) => checkIfFilled(e)}>{t('relationship')}</Link>
                  <Link scroll={false} href="/#users" onClick={(e) => checkIfFilled(e)}>{t('users')}</Link>
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
                    className={authorizedUserData.name ? classesPrimarySmall.root : classNames(classesPrimarySmall.root, 'gtm-signup')}
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
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  isUserLoaded: PropTypes.bool,
  showButton: PropTypes.bool,
};

export default React.memo(withTranslation('common')(Menu));
