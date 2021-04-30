import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkScroll } from 'react-scroll';

import Programmer from '../../assets/img/svg/Programmer.svg';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';
import SlideDown from './SlideDown/SlideDown';
import { withTranslation } from '../../../i18n';

import styles from './Acquainted.module.scss';
import ContentWrapper from '../ContentWrapper';

const About = ({ t }) => (
  <section className={styles.about} id="about-me">
    <ContentWrapper className="container">
      <LinkScroll
        className={styles.slideDownContainer}
        to="about"
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
              disabled={false}
              label={t('sign-up')}
            />
          </p>
        </div>
        <div className={styles.aboutRightColumn}>
          <div className={styles.aboutLogoContainer}>
            <Programmer />
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(About);
