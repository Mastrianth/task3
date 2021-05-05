import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from '../../../i18n';

import ContentWrapper from '../ContentWrapper';

import styles from './Relationship.module.scss';
import htmlImg from '../../assets/img/svg/do-not-inline/HTML.svg';
import cssImg from '../../assets/img/svg/do-not-inline/CSS.svg';
import jsImg from '../../assets/img/svg/do-not-inline/JS.svg';

const headingClasses = classNames('h2', styles.heading);
const subheadingClasses = classNames(styles.webdevSubtitle);
const textClasses1 = classNames(styles.webdevText);
const textClasses2 = classNames(styles.webdevText);
const textClasses3 = classNames(styles.webdevText);
const imgClasses1 = classNames(styles.webdevLogoContainer, styles.first);
const imgClasses2 = classNames(styles.webdevLogoContainer, styles.second);
const imgClasses3 = classNames(styles.webdevLogoContainer, styles.third);

const Relationships = ({ t }) => {
  const techs = [
    {
      imgSrc: htmlImg,
      imgClasses: imgClasses1,
      i18nHeadingId: 'webDevTitle1',
      textClasses: textClasses1,
      i18nTextId: 'webDevText1',
    },
    {
      imgSrc: cssImg,
      imgClasses: imgClasses2,
      i18nHeadingId: 'webDevTitle2',
      textClasses: textClasses2,
      i18nTextId: 'webDevText2',
    },
    {
      imgSrc: jsImg,
      imgClasses: imgClasses3,
      i18nHeadingId: 'webDevTitle3',
      textClasses: textClasses3,
      i18nTextId: 'webDevText3',
    },
  ];

  const techsHTML = techs.map(({
    imgSrc, imgClasses, i18nHeadingId,
    textClasses, i18nTextId,
  }) => (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.webdevColumn} key={i18nHeadingId}>
      <img loading="lazy" src={imgSrc} alt={i18nHeadingId} className={imgClasses} />
      <div className={styles.textWrapper}>
        <h3 className={subheadingClasses}>{t(i18nHeadingId)}</h3>
        <p className={textClasses}>
          {t(
            i18nTextId,
          )}
        </p>
      </div>
    </div>
  ));

  return (
    <section className={styles.Relationships} id="relationships">
      <ContentWrapper>
        <h2 className={headingClasses}>{t('webDev')}</h2>
        <div className={styles.webdevTechContainer}>
          {techsHTML}
        </div>
      </ContentWrapper>
    </section>
  );
};

Relationships.propTypes = {
  t: PropTypes.func.isRequired,
};

export default memo(withTranslation('webdevelopment')(Relationships));
