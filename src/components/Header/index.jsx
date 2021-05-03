import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { I18nContext } from 'next-i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import classNames from 'classnames';
import NavLink from '../NavLink';
import UserInfo from '../UserInfo';
import IconButton from '../IconButton';
import ContentWrapper from '../ContentWrapper';
import { withTranslation } from '../../../i18n';
import classes from './Header.module.scss';
import LogoImg from '../../assets/img/svg/Logo.svg';
import BurgerIcon from '../../assets/img/svg/line-menu.svg';
import UKLogo from '../../assets/img/svg/uk.svg';
import GermanyLogo from '../../assets/img/svg/germany.svg';
import Arrow from '../../assets/img/svg/arrow.svg';

const Header = ({
  t, userName, userEmail, userAvatar, logOut, isLoaded, openSideDrawer,
}) => {
  const [activeLanguageMenu, setActiveLanguageMenu] = useState(false);
  const { i18n: { language, changeLanguage } } = useContext(I18nContext);
  const toggleLangMenu = (e) => {
    setActiveLanguageMenu((state) => !state);
    e.preventDefault();
  };
  return (
    <header className={classes.Header}>
      <ContentWrapper>
        <div className={classes.headerWrapper}>
          <a href="#" className={classes.logoLink}>
            <LogoImg alt="pupvote" className={classes.logoImg} />
          </a>

          <div className={classes.container}>
            <nav className={classes.menu}>
              <ul className={classes.menu__ul}>
                <NavLink to="about-me">{t('about-me')}</NavLink>
                <NavLink to="relationships">{t('relationship')}</NavLink>
                <NavLink to="users">{t('users')}</NavLink>
                <NavLink to="sign-up">{t('sign-up')}</NavLink>
              </ul>
            </nav>
          </div>
          <div className={classes.mobMenu}>
            <ClickAwayListener onClickAway={() => setActiveLanguageMenu(false)}>
              <div className={classes.mobileLangContainer}>
                <a href="#" className={classes.langhref} onClick={toggleLangMenu}>
                  {language !== 'de' ? <UKLogo /> : <GermanyLogo />}
                  {language === 'de' ? 'De' : 'En'}
                  <Arrow />
                </a>
                <div className={activeLanguageMenu ? classNames(classes.DropdownMenu, classes.Show) : classes.DropdownMenu}>
                  <a
                    className={language !== 'de' ? classes.selected : null}
                    onClick={(e) => {
                      changeLanguage('en');
                      setActiveLanguageMenu(false);
                    }}
                  >
                    <UKLogo />
                    <span>
                      En
                    </span>
                  </a>
                  <a
                    className={language === 'de' ? classes.selected : null}
                    onClick={(e) => {
                      changeLanguage('de');
                      setActiveLanguageMenu(false);
                    }}
                  >
                    <GermanyLogo />
                    <span>
                      De
                    </span>
                  </a>
                </div>
              </div>
            </ClickAwayListener>
          </div>

          <div className={classes.users}>
            <UserInfo
              userName={userName}
              userAvatar={userAvatar}
              userEmail={userEmail}
              logOut={logOut}
              isLoaded
            />
          </div>

          <IconButton
            isSecondary
            onClick={openSideDrawer}
            className={classes.burgerBtn}
          >
            <BurgerIcon className={classes.burgerImg} />
          </IconButton>
        </div>
      </ContentWrapper>
    </header>
  );
};
Header.defaultProps = {
  userName: undefined,
  userEmail: undefined,
  userAvatar: undefined,
  logOut: undefined,
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  openSideDrawer: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};
export default withTranslation('common')(Header);
