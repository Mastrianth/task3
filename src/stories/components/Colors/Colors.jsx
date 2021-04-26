import React from 'react';
import PropTypes from 'prop-types';
import TypographyCustom from '../Typography/TypographyCustom';
import styles from './Colors.module.scss';

const Colors = (props) => {
  const { color } = props;
  const colorText = {
    primary: '#f4e041',
    secondary: '#00bdd3',
    tertiary: '#ea5924',
    background: '#F8F8F8',
    gray: '#7E7E7E',
    black87: 'rgba(0, 0, 0, 0.87)',
    true: '#31794E',
    light_gray: '#D0CFCF',
    hover: '#FFE302',
    hover_blue: '#02DDF7',
    links: '#0052B4',
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.color} ${styles[color]}`}>
        <TypographyCustom component="p" type="1" text={colorText[color]} />
      </div>
    </div>
  );
};

export default Colors;

Colors.propTypes = {
  color: PropTypes.string,
};

Colors.defaultProps = {
  color: 'primary',
};
