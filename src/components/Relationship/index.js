import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from '../../../i18n';

import ContentWrapper from '../ContentWrapper';

import classes from './Relationship.module.scss';
import htmlImg from '../../assets/img/svg/do-not-inline/HTML.svg';
import cssImg from '../../assets/img/svg/do-not-inline/CSS.svg';
import jsImg from '../../assets/img/svg/do-not-inline/JS.svg';

const headingClasses = classNames('h2', classes.heading);
const subheadingClasses = classNames('h3', classes.subheading);
const textClasses1 = classNames('p2', classes.text, classes.text1);
const textClasses2 = classNames('p2', classes.text, classes.text2);
const textClasses3 = classNames('p2', classes.text, classes.text3);

const Relationships = ({ t }) => {
  const techs = [
    {
      imgSrc: htmlImg,
      imgClasses: classes.HTMLImg,
      i18nHeadingId: 'webDevTitle1',
      textClasses: textClasses1,
      i18nTextId: 'webDevText1',
    },
    {
      imgSrc: cssImg,
      imgClasses: classes.CSSImg,
      i18nHeadingId: 'webDevTitle2',
      textClasses: textClasses2,
      i18nTextId: 'webDevText2',
    },
    {
      imgSrc: jsImg,
      imgClasses: classes.JSImg,
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
    <div className={classes.techWrapper} key={i18nHeadingId}>
      <img src={imgSrc} alt={i18nHeadingId} className={imgClasses} />
      <div className={classes.textWrapper}>
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
    <section className={classes.Relationships} id="relationships">
      <ContentWrapper>
        <h2 className={headingClasses}>{t('webDev')}</h2>
        <div className={classes.container}>
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
