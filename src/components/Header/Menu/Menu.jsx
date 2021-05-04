import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import { Link as LinkScroll } from 'react-scroll';
import Button from '@material-ui/core/Button';
import { I18nContext } from 'next-i18next';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import {
  selectAuthorizedUserData,
  selectFormFilled,
  clearUserData,
  selectPlaceholderForAuthorizedUser,
  hideAuthorizedPlaceholder,
} from '../../../utils/usersSlice';
import { i18n, withTranslation } from '../../../../i18n';

import UsersWithTooltip from '../../UserCard/fk/UsersWithTooltip';
import EmailWithTooltip from '../../UserCard/fk/EmailWithTooltip';
import MobileHeader from '../MobileMenu/MobileHeader';

import Logo from '../../../assets/img/svg/Logo.svg';
import Exit from '../../../assets/img/svg/exit.svg';
import styles from './Menu.module.scss';
import userPlaceholderImg from '../../../assets/img/svg/do-not-inline/ImagePlaceHolder.svg';
import ContentWrapper from "../../ContentWrapper";

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


const Menu = ({ openBurgerMenu, t, openModal,name,email }) => {
  const { i18n: { language } } = useContext(I18nContext);
  const router = useRouter();
  const classesPrimarySmall = useStylesPrimarySmall();

  const isFormFilled = useSelector(selectFormFilled);
  const authorizedUserData = useSelector(selectAuthorizedUserData);
  const showUserPlaceholder = useSelector(selectPlaceholderForAuthorizedUser);
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

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
              <img width={100} height={26} onClick={(e) => checkIfFilled(e)} alt="Logo" src="/assets/svg/Logo.svg" />
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
                  <span className={styles.userLogoMenu}>
                    <div className={styles.placeholderUserLogo} />
                    <span className={styles.usersData}>
                       <div className={styles.placeholderName} />
                       <div className={styles.placeholderEmail} />
                    </span>
                  </span>
                  <a
                    onClick={
                (e) => {
                  dispatch(clearUserData());
                  e.preventDefault();
                }
              }
                    href="#"
                    className={styles.menuUserExit}
                  >
                    <Exit />
                  </a>
                </span>
              </>
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

export default withTranslation('common')(Menu);
