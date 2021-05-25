import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../../i18n';

import styles from './TermsText.module.scss';
import ContentWrapper from '../ContentWrapper';
import FootPrints from '../../assets/img/svg/do-not-inline/Footprints.svg';


const TOS = ({ t }) => (
  <div style={{ flex: 1 }} className={styles.bannerColor}>
    <section style={{ backgroundColor: '#f8f8f8'}}>
      <div className={styles.bg}>
      <ContentWrapper>
        <div className="container">
          <div className={styles.contentContainer}>
            <div>
              <h1 className={styles.title}>{t('Terms and Conditions')}</h1>
              <h2 className={styles.subtitle}>{t('terms-subtitle')}</h2>
              <p className={styles.text}>
                {t('tos1')}
                <a href="#" className={styles.link}>{t('tos2')}</a>
                {t('tos3')}
                <a href="#" className={styles.link}>{t('tos4')}</a>
                {t('tos5')}
              </p>
              <ul className={styles.ululul}>
                <li>
                  <a href="#" className={styles.link}>{t('tos6')}</a>
                  {t('tos7')}
                </li>
                <li>
                  <a href="#" className={styles.link}>{t('tos8')}</a>
                  {t('tos9')}
                </li>
                <li>
                  <a href="#" className={styles.link}>{t('tos10')}</a>
                  {t('tos11')}
                </li>
                <li>
                  <a href="#" className={styles.link}>{t('tos12')}</a>
                  {t('tos13')}
                </li>
              </ul>
              <p className={styles.text}>{t('tos14')}</p>
              <p className={styles.text}>
                {t('tos15')}
                <a href="#" className={styles.link}>{t('tos16')}</a>
                {t('tos17')}
              </p>
              <h2 className={styles.subtitleInText}>{t('Service provider')}</h2>
              <p className={styles.text}>
                Google   {' '}
                <a href="#" className={styles.link}>{t('tos2-0')}</a>
                {t('tos2-1')}
              </p>
              <p className={styles.text}>
                Google LLC
                <br />
                {t('tos2-2')}
              </p>
              <p className={styles.text}>
                {t('tos2-3')}
                <br />
                {t('tos2-4')}
              </p>
              <h2 className={styles.subtitleInText}>{t('Age requirements')}</h2>
              <p className={styles.text}>
                {t('tos3-1')}
                {' '}
                <a
                  href="#"
                  className={styles.link}
                >
                  {t('tos3-2')}
                </a>
                {t('tos3-3')}
              </p>
              <p className={styles.text}>{t('tos3-4')}</p>
              <p className={styles.text}>
                {t('tos3-5')}
                {' '}
                <a href="#" className={styles.link}>{t('tos3-6')}</a>
              </p>
              <h2 className={styles.subtitleInText}>{t('Your relationship with Google')}</h2>
              <p className={styles.text}>
                {t('tos4-1')}
                {' '}
                <a
                  href="#"
                  className={styles.link}
                >
                  {t('tos4-2')}
                </a>
                {t('tos4-3')}
              </p>
              <h2 className={styles.subtitleInText}>{t('Respect others')}</h2>
              <p className={styles.text}>{t('tos5-1')}</p>
              <ul>
                <li>{t('tos5-2')}</li>
                <li>{t('tos5-3')}</li>
                <li>{t('tos5-4')}</li>
                <li>{t('tos5-5')}</li>
              </ul>
            </div>
            <div >
              <img className={styles.footprints} src={FootPrints} alt="foot" />
            </div>
          </div>
        </div>
      </ContentWrapper>
      </div>
    </section>
  </div>
);

TOS.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('terms')(TOS);
