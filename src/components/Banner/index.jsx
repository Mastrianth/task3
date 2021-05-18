import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { withTranslation } from '../../../i18n';
import styles from './Banner.module.scss';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import canUseWebP from '../../utils/canUseWebP';
import { getCurrentUser } from '../../../redux/reducers/auth';
import { selectApiError } from '../../../redux/reducers/ui';

const Banner = ({ t }) => {
  const router = useRouter();
  const authorizedUserData = useSelector(getCurrentUser);
  const isApiError = useSelector(selectApiError);
  const [isWebp, setIsWebp] = useState(true);
  useEffect(() => {
    setIsWebp(canUseWebP());
  }, []);

  return (
    <>
      <div className={classNames(styles.bannerColor, styles.site)}>
        <section className={isWebp ? classNames(styles.banner, styles.webp) : styles.banner}>
          <div className={styles.container}>
            <div
              className={isApiError ? classNames(styles.bannerContentContainer, styles.error) : styles.bannerContentContainer}
            >
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>{t('bannerTitle')}</h1>
                <p className={styles.bannerText}>
                  {t('bannerText')}
                  <span className={styles.bannerTextForDesktop}>
                    {' '}
                    {t('bannerTextForDesktop')}
                  </span>
                </p>
                <p className={styles.buttonContainer}>
                  <ButtonComponent
                    gtmclass={authorizedUserData.name ? null : 'gtm-signup'}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={authorizedUserData.isLoaded ? () => router.push('/#users') : () => router.push('/sign-up')}
                    label={authorizedUserData.isLoaded ? t('users') : t('sign-up')}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Banner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Banner);
