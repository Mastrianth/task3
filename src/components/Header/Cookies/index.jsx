import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../Header.module.scss';
import ButtonComponent from '../../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import { withTranslation } from '../../../../i18n';
import ContentWrapper from "../../ContentWrapper";

const Cookies = ({ t }) => {
  const [showCookiesPolicy, setShowCookiesPolicy] = useState(false);

  const handleHideCookies = () => {
    setShowCookiesPolicy(false);
    localStorage.setItem('cookies', '0');
  };
  useEffect(() => {
    const cookies = localStorage.getItem('cookies');
    if (!cookies) {
      setShowCookiesPolicy(true);
    }
  }, []);
  return (
    <ContentWrapper>
    <div className={classNames(styles.cookiePolicy, {
      [styles.active]: showCookiesPolicy,
    })}
    >
      <div className="container">
        <div className={styles.cookiePolicyContainer}>
          <div>
            {t('cookie-policy-text')}
            {' '}
            <a href="#" className={styles.cookieLink}>{t('Cookies Policy')}</a>
          </div>
          <div className={styles.buttonCookieContainer}>
            <ButtonComponent
              onClick={() => handleHideCookies()}
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
    </ContentWrapper>
  );
};

Cookies.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Cookies);
