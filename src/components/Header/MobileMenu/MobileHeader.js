import React, { useContext, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { I18nContext } from 'next-i18next';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import { i18n } from '../../../../i18n';

import UKLogo from '../../../assets/img/svg/uk.svg';
import GermanyLogo from '../../../assets/img/svg/germany.svg';
import Arrow from '../../../assets/img/svg/arrow.svg';

import styles from './MobileHeader.module.scss';

const MobileHeader = ({ openBurgerMenu }) => {
  const [activeLanguageMenu, setActiveLanguageMenu] = useState(false);
  const { i18n: { language } } = useContext(I18nContext);

  const toggleLangMenu = (e) => {
    setActiveLanguageMenu((state) => !state);
    e.preventDefault();
  };
  return (
    <>
      <ClickAwayListener onClickAway={() => setActiveLanguageMenu(false)}>
        <div className={styles.mobileLangContainer}>
          <a href="#" className={styles.langhref} onClick={toggleLangMenu}>
            {language !== 'de' ? <UKLogo /> : <GermanyLogo />}
            {language === 'de' ? 'De' : 'En'}
            <Arrow />
          </a>

          <div className={activeLanguageMenu ? classNames(styles.DropdownMenu, styles.Show) : styles.DropdownMenu}>
            <a
              className={language !== 'de' ? styles.selected : null}
              onClick={(e) => {
                i18n.changeLanguage('en');
                setActiveLanguageMenu(false);
              }}
            >
              <UKLogo />
              <span>
                En
              </span>
            </a>
            <a
              className={language === 'de' ? styles.selected : null}
              onClick={(e) => {
                i18n.changeLanguage('de');
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

      <div className={styles.mobileBurgerContainer}>
        <button className={styles.navToggle} type="button" onClick={openBurgerMenu} aria-label="Burger menu">
          <span className={styles.navToggleItem} />
        </button>
      </div>
    </>
  );
};

MobileHeader.propTypes = {
  openBurgerMenu: PropTypes.func,
};

export default React.memo(MobileHeader);
