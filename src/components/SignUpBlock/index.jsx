import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from '../../../i18n';
import ContentWrapper from '../ContentWrapper';
import MyContext from '../../utils/context';

import styles from './SignUpBlock.module.scss';
import Form from '../Form';

const SignUpBlock = ({ t }) => {
  const titleClasses = classNames('h2', styles.title);
  const subtitleClasses = classNames('h5', styles.subtitle);
  const { isGoogleSpeedTest } = useContext(MyContext);
  return (
    <section className={styles.SignUpBlock} id="sign-up">
      <ContentWrapper>
        <h2 className={titleClasses}>{t('reg-form-title')}</h2>
        <h3 className={subtitleClasses}>
          {t(
            'reg-form-subtitle',
          )}
        </h3>
        {isGoogleSpeedTest ? null : <Form t={t} />}
      </ContentWrapper>
    </section>
  );
};

export default withTranslation('common')(SignUpBlock);
