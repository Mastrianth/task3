import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './TypographyCustom.module.scss';

const TypographyCustom = (props) => {
  const {
    align, variant, component, text, type,
  } = props;

  const typographyClassName = component === 'p' ? styles.paragraph : styles.heading;
  const typeClassName = type !== '' ? styles[`type${type}`] : '';
  return (
    <Typography
      align={align}
      variant={variant}
      className={`${typographyClassName} ${typeClassName}`}
      component={component}
      type={type}
    >
      {text}
    </Typography>
  );
};

export default TypographyCustom;

TypographyCustom.propTypes = {
  align: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  component: PropTypes.string,
  type: PropTypes.string,
};
