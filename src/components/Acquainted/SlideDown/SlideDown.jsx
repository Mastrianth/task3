import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlideDown.module.scss';
import { withTranslation } from '../../../../i18n';
import SlideDownIcon from '../../../assets/img/svg/do-not-inline/SlideDown.svg';

function SlideDown({ t }) {
  return (
    <div className={styles.slideDownContainer}>
      <div className={styles.slideDown}>{t('Scroll down')}</div>
      <img className={styles.slideDownIcon} src={SlideDownIcon} alt="slide down" />
    </div>
  );
}

SlideDown.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SlideDown);
