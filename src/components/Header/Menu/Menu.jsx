import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { I18nContext } from 'next-i18next';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import {
  selectFormFilled,
  clearUserData,
} from '../../../utils/usersSlice';
import { i18n, withTranslation } from '../../../../i18n';

// import MobileHeader from '../MobileMenu/MobileHeader';

import Logo from '../../../assets/img/svg/Logo.svg';
import Exit from '../../../assets/img/svg/exit.svg';
import styles from './Menu.module.scss';
import ContentWrapper from '../../ContentWrapper';

const MobileHeader = dynamic(() => import('../MobileMenu/MobileHeader'));

const Menu = ({
  openBurgerMenu, t, openModal,
}) => {
  const { i18n: { language } } = useContext(I18nContext);
  const router = useRouter();

  const isFormFilled = useSelector(selectFormFilled);
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
