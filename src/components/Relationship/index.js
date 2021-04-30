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
      i18nHeadingId: 'I\'m in love with HTML',
      textClasses: textClasses1,
      i18nTextId: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    },
    {
      imgSrc: cssImg,
      imgClasses: classes.CSSImg,
      i18nHeadingId: 'CSS is my inspiration',
      textClasses: textClasses2,
      i18nTextId: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics.',
    },
    {
      imgSrc: jsImg,
      imgClasses: classes.JSImg,
      i18nHeadingId: 'JavaScript is my friend',
      textClasses: textClasses3,
      i18nTextId: 'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
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
        <h2 className={headingClasses}>{t('About my relationships with web-development')}</h2>
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

export default memo(withTranslation('main')(Relationships));
