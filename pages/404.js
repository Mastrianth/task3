import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import ButtonComponent from '../src/components/shared/Button/LargePrimaryButtons/LargePrimaryButton';
import { withTranslation } from '../i18n';
import Error404Image from '../src/assets/img/svg/404.svg';

import styles from '../src/assets/scss/pages/404.module.scss';
import ContentWrapper from '../src/components/ContentWrapper';

const Banner = ({ t }) => {
  const router = useRouter();
  return (
    <ContentWrapper>
      <div className={styles.pawsContainer}>
        <div className="container w100">
          <div className={styles.error404VerticalContainer}>
            <div className={styles.error404ContentContainer}>
              <div className={styles.error404LeftColumn}>
                <h1 className={styles.error404Title}>404</h1>
                <h2 className={styles.error404Subtitle}>{t('missing')}</h2>
                <p className={styles.error404Text}>
                  {t('404-text')}
                </p>
                <p className={styles.error404ButtonContainer}>
                  <ButtonComponent
                    onClick={() => router.push('/').then(() => window.scrollTo(0, 0))}
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={false}
                    label={t('Go to home')}
                  />
                </p>
              </div>
              <div className={styles.error404RightColumn}>
                <div className={styles.error404LogoContainer}>
                  <Error404Image />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

Banner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Banner);
