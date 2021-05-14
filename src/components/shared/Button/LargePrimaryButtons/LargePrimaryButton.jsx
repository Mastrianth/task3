import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useButtonStyles = makeStyles({
  primaryLarge: {
    paddingRight: '16px',
    paddingLeft: '16px',
    minWidth: '148px',
    height: '50px',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '18px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    borderRadius: '80px',
    backgroundColor: '#f4e041',
    color: 'rgba(0, 0, 0, 0.87)',

    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#B4B4B4',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#ffe302',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',

    },
    '&:focus': {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: '#f4e041',
      boxShadow: 'none',
    },
    '& > span': {
      pointerEvents: 'none',
    },
  },
  primarySmall: {
    paddingRight: '19px',
    paddingLeft: '19px',
    minWidth: '93px',
    height: '38px',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '16px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    borderRadius: '80px',
    backgroundColor: '#f4e041',
    color: 'rgba(0, 0, 0, 0.87)',

    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#B4B4B4',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#ffe302',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',

    },
    '&:focus': {
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',
    },
    '& > span': {
      pointerEvents: 'none',
    },
  },
  smallOutline: {
    paddingRight: '13px',
    paddingLeft: '13px',
    height: '38px',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '16px',
    // minWidth: "98px",
    width: '100%',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    borderRadius: '80px',
    border: '2px solid #FFFFFF',

    color: '#FFF',
    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: '#B4B4B4',
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',

    },
    '&:focus': {
      color: 'rgba(255, 255, 255, 1)',
    },
    '& > span': {
      pointerEvents: 'none',
    },
  },
  secondaryLarge: {
    minWidth: '148px',
    height: '50px',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '18px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    borderRadius: '80px',
    backgroundColor: '#00BDD3',
    color: '#FFFFFF',

    '&.Mui-disabled': {
      color: '#FFFFFF',
      backgroundColor: '#B4B4B4',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#02DDF7',
      // color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 'none',

    },
    '&:focus': {
      // color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: '#00BDD3',
      boxShadow: 'none',
    },
    '& > span': {
      pointerEvents: 'none',
    },
    '& > .MuiTouchRipple-root': {
      color: 'rgba(0, 0, 0, 0.87)',
    },

    '& > .MuiButton-label': {
      position: 'absolute',
      zIndex: '1',
    },

  },
  '@keyframes mui-ripple-enter': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0.1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.3,
    },
  },
  '@keyframes mui-ripple-exit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  '@keyframes mui-ripple-pulsate': {
    '0%': {
      transform: 'scale(0.4)',
    },
    '50%': {
      transform: 'scale(0.92)',
    },
    '100%': {
      transform: 'scale(0.4)',
    },
  },
  secondaryLargeOutline: {

    minWidth: '148px',
    height: '50px',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '18px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap, sans-serif',
    border: '2px solid #F4E041',
    borderRadius: '80px',
    backgroundColor: '#fff',
    '& > span': {
      pointerEvents: 'none',
    },
    '&.Mui-disabled': {
      color: '#FFFFFF',
      backgroundColor: '#B4B4B4',
      boxShadow: 'none',
    },
    '&:hover': {
      // backgroundColor: "rgba(244, 224, 65, 0.3);",

    },
    '@media (hover:hover)': {
      backgroundColor: 'none !important',
    },

    '&:focus': {
      // color: 'rgba(0, 0, 0, 0.87)',
      // border: "2px solid #40a5f5",
      boxShadow: 'none',
      backgroundColor: '#fff',

    },
    '& > .MuiTouchRipple-root': {
      color: '#F4E041',

    },

    '& > .MuiButton-label': {
      position: 'absolute',
      zIndex: '1',
    },

  },

});

function ButtonComponent({
  size, color, disabled, label, variant, onClick, type, gtmclass,
}) {
  const btnClasses = useButtonStyles();
  let componentClass = {};
  if (variant === 'contained') {
    if (color === 'primary') {
      if (size === 'large') componentClass = btnClasses.primaryLarge;
      if (size === 'small') componentClass = btnClasses.primarySmall;
    } else {
      componentClass = btnClasses.secondaryLarge;
    }
  } else if (size === 'small') {
    componentClass = btnClasses.smallOutline;
  } else {
    componentClass = btnClasses.secondaryLargeOutline;
  }

  return (
    <Button
      disabled={disabled}
      variant={variant}
      className={(gtmclass && !disabled) ? classNames(componentClass, gtmclass) : componentClass}
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
}

ButtonComponent.propTypes = {
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  gtmclass: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};

ButtonComponent.defaultProps = {
  color: 'primary',
  disabled: false,
  size: 'large',
  variant: 'contained',
};

export default ButtonComponent;
