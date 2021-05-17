import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withTranslation } from '../../../i18n';
import canUseWebP from '../../utils/canUseWebP';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';

import styles from './SignUpBanner.module.scss';
import { getCurrentUser } from '../../../redux/reducers/auth';

const SignUpBanner = ({ t }) => {
  const [isWebp, setIsWebp] = useState(true);
  const authorizedUserData = useSelector(getCurrentUser);
  useEffect(() => {
    setIsWebp(canUseWebP());
  }, []);
  const router = useRouter();
  return (
    <div style={{ flex: 1 }} className={styles.bannerColor}>
      <section className={isWebp ? classNames(styles.banner, styles.webp) : styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerContentContainer}>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerTitle}>{t('reg-title')}</h1>
              <p className={styles.bannerTextForDesktop}>
                {' '}
                {t('reg-text-full')}
              </p>
              <p className={styles.bannerTextForTablet}>
                {' '}
                {t('reg-text-tablet')}
              </p>
              <p className={styles.bannerTextForMobile}>{t('reg-text-mobile')}</p>
              <p className={styles.buttonContainer}>
                <ButtonComponent
                  onClick={authorizedUserData.name ? () => router.push('/#users') : () => document.getElementById('sign-up').scrollIntoView({ behavior: 'smooth' })}
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={false}
                  label={authorizedUserData.name ? t('users') : t('sign-up')}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SignUpBanner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SignUpBanner);
