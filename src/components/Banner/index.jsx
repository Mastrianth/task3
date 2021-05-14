import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { withTranslation } from '../../../i18n';
import classes from './Banner.module.scss';
import ContentWrapper from '../ContentWrapper';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import canUseWebP from '../../utils/canUseWebP';
import { getCurrentUser } from '../../../redux/reducers/auth';

const Banner = ({ t, isUserLoaded }) => {
  const h1Classes = classNames('h1', classes.h1);
  const textClassesWide1 = classNames('p1', classes.text, classes.desktop, classes.textWide1);
  const textClassesDesktop = classNames('p1', classes.text, classes.desktop);
  const textClassesMobile = classNames('p1', classes.text, classes.mobile);
  const [isWebp, setIsWebp] = useState(true);
  const authorizedUserData = useSelector(getCurrentUser);
  const router = useRouter();
  useEffect(() => {
    setIsWebp(canUseWebP());
  }, []);

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
            onClick={authorizedUserData.isLoaded ? () => router.push('/#users') : () => router.push('/sign-up')}
            label={authorizedUserData.isLoaded ? t('users') : t('sign-up')}
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
