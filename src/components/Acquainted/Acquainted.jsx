import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkScroll } from 'react-scroll';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Programmer from '../../assets/img/svg/Programmer.svg';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import SlideDown from './SlideDown/SlideDown';
import { withTranslation } from '../../../i18n';

import styles from './Acquainted.module.scss';
import ContentWrapper from '../ContentWrapper';
import { getCurrentUser } from '../../../redux/reducers/auth';

const About = ({ t }) => {
  const router = useRouter();
  const authorizedUserData = useSelector(getCurrentUser);
  return (
    <section className={styles.about} id="about-me">
      <ContentWrapper className="container">
        <LinkScroll
          className={styles.slideDownContainer}
          to="about-me"
          spy
          smooth
          duration={500}
        >
          <SlideDown />
        </LinkScroll>
        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutLeftColumn}>
            <h2 className={styles.aboutTitle}>{t('aboutTitle')}</h2>
            <h3 className={styles.aboutSubtitle}>{t('aboutSubtitle')}</h3>
            <p className={styles.aboutText}>
              {t('aboutText')}
            </p>
            <p className={styles.aboutButtonContainer}>
              <ButtonComponent
                variant="contained"
                color="secondary"
                size="large"
                gtmclass={authorizedUserData.name ? null : 'gtm-signup'}
                onClick={authorizedUserData.name ? () => router.push('#users') : () => router.push('/sign-up').then(() => window.scrollTo(0, 0))}
                disabled={false}
                label={authorizedUserData.name ? t('users') : t('sign-up')}
              />
            </p>
          </div>
          <div className={styles.aboutRightColumn}>
            <div className={styles.aboutLogoContainer}>
              <Programmer loading="lazy" />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};
About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(About);
