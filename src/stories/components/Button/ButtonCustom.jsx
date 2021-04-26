import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core/styles';
import styles from './ButtonCustom.module.scss';

const ButtonCustom = (props) => {
  const {
    text, disabled, onClick, type,
  } = props;

  const buttonClassName = type === 'secondary'
    ? `${styles.btn} ${styles.secondary}`
    : type === 'primary'
      ? `${styles.btn} ${styles.primary}`
      : type === 'primary_small'
        ? `${styles.btn} ${styles.primary_small}`
        : type === 'outlined'
          ? `${styles.btn} ${styles.outlined}`
          : `${styles.btn} ${styles.outlined_white}`;

  return (
    <StylesProvider injectFirst>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        color="inherit"
        className={buttonClassName}
      >
        {text}
      </Button>
    </StylesProvider>
  );
};

export default ButtonCustom;

ButtonCustom.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

ButtonCustom.defaultProps = {
  disabled: false,
  onClick: () => {},
  type: 'primary',
};
