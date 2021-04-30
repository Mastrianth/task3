import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from '../../../i18n';

import classes from './Banner.module.scss';
import ContentWrapper from '../ContentWrapper';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';

const Banner = ({ t }) => {
  const h1Classes = classNames('h1', classes.h1);
  const textClassesWide1 = classNames('p1', classes.text, classes.desktop, classes.textWide1);
  const textClassesDesktop = classNames('p1', classes.text, classes.desktop);
  const textClassesMobile = classNames('p1', classes.text, classes.mobile);

  return (
    <section id="banner" className={classes.Banner}>
      <ContentWrapper>
        <div className={classes.container}>
          <h1 className={h1Classes}>
            {t(
              'bannerTitle',
            )}
          </h1>
          <p className={textClassesDesktop}>{t('bannerTextForDesktop')}</p>
          <p className={textClassesMobile}>{t('bannerText')}</p>
          <ButtonComponent
            variant="contained"
            color="primary"
            size="large"
            disabled={false}
            label={t('sign-up')}
          />
        </div>
      </ContentWrapper>
    </section>
  );
};

Banner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Banner);
