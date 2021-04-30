import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";


export const btnPrimaryLargeStyles = {
  root: {
    width: "148px",
    height: "50px",
    fontWeight: "400",
    textTransform: "capitalize",
    fontSize: "18px",
    boxShadow: "none",
    textAlign: "center",
    fontFamily: "Asap",
    borderRadius: "80px",
    backgroundColor: "#f4e041",
    color: 'rgba(0, 0, 0, 0.87)',
    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: "#B4B4B4",
      boxShadow: "none",
    },
    '&:hover': {
      backgroundColor: "#ffe302",
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: "none",

    },
    "&:focus": {
      color: 'rgba(0, 0, 0, 0.87)',
      //border: "2px solid #40a5f5",
      boxShadow: "none",
    }
  }
};

export const btnSecondaryLargeStyles = {
  root: {
    width: "148px",
    height: "50px",
    fontWeight: "400",
    textTransform: "capitalize",
    fontSize: "18px",
    boxShadow: "none",
    textAlign: "center",
    fontFamily: "Asap",
    borderRadius: "80px",
    backgroundColor: "#00BDD3",
    color: '#FFFFFF',

    '&.Mui-disabled': {
      color: '#FFFFFF',
      backgroundColor: "#B4B4B4",
      boxShadow: "none",
    },
    '&:hover': {
      backgroundColor: "#02DDF7",
      boxShadow: "none",

    },
    "&:focus": {

      boxShadow: "none",
    },
    '& > .MuiTouchRipple-root':{
      color:"rgba(0, 0, 0, 0.87)",
    },
    '& > .MuiButton-label':{
      position:"absolute",
      zIndex:"10"
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
};

export const btnPrimarySmallStyles = {
  root: {
    width: "93px",
    height: "38px",
    fontWeight: "400",
    textTransform: "capitalize",
    fontSize: "16px",
    boxShadow: "none",
    textAlign: "center",
    fontFamily: "Asap",
    borderRadius: "80px",
    backgroundColor: "#f4e041",
    color: 'rgba(0, 0, 0, 0.87)',
    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: "#B4B4B4",
      boxShadow: "none",
    },
    '&:hover': {
      backgroundColor: "#ffe302",
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: "none",

    },
    "&:focus": {
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: "none",
    }
  }
};


export const btnOutlineStyles = {
  root: {
    width: "93px",
    height: "38px",
    fontWeight: "400",
    textTransform: "capitalize",
    fontSize: "16px",
    boxShadow: "none",
    textAlign: "center",
    fontFamily: "Asap",
    borderRadius: "80px",
    border: "2px solid #FFFFFF",
    lineHeight: "160%",
    color: '#FFF',
    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: "#B4B4B4",
    },
    '&:hover': {
      background: "rgba(255, 255, 255, 0.2)",

    },
    "&:focus": {
      color: 'rgba(255, 255, 255, 1)',
    }
  }
};

export const btnOutlineWhiteStyles = {
  root: {
    width: "93px",
    height: "38px",
    fontWeight: "400",
    textTransform: "capitalize",
    fontSize: "16px",
    boxShadow: "none",
    textAlign: "center",
    fontFamily: "Asap",
    borderRadius: "80px",
    border: "2px solid #F4E041",
    lineHeight: "160%",
    color: 'rgba(0, 0, 0, 0.87)',
    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: "#B4B4B4",
    },
    '&:hover': {
      background: "rgba(244, 224, 65, 0.3)",

    },
    "&:focus": {
      color: 'rgba(0, 0, 0, 0.87)',
    }
  }
};



const useStylesPrimaryLarge = makeStyles(() => ({...btnPrimaryLargeStyles}));
const useStylesSecondaryLarge = makeStyles(() => ({...btnSecondaryLargeStyles}));
const useStylesPrimarySmall = makeStyles(() => ({...btnPrimarySmallStyles}));
const useStylesOutline = makeStyles(() => ({...btnOutlineStyles}));
const useStylesWhiteOutline = makeStyles(() => ({...btnOutlineWhiteStyles}));


export function ButtonComponent({size, color, backgroundColor, disabled, label, variant, ...props}) {
  const classesPrimaryLarge = useStylesPrimaryLarge();
  const classesSecondaryLarge = useStylesSecondaryLarge();
  const classesPrimarySmall = useStylesPrimarySmall();
  const classesOutline = useStylesOutline();
  const classesOutlineWhite = useStylesWhiteOutline();
  let componentClass = {};
  if (variant === "contained") {
    if (color === "primary") {
      if (size === "large") componentClass = classesPrimaryLarge.root;
      if (size === "small") componentClass = classesPrimarySmall.root;
    }
    else {
      componentClass = classesSecondaryLarge.root;
    }
  } else if (color === '333') {
    componentClass = classesOutlineWhite.root;
  }
  else {
    componentClass = classesOutline.root;
  }


  return (
    <div style={{
      height: "64px",
      width: "100%",
      padding: '10px',
      backgroundColor
    }}>
      <Button
        disabled={disabled}
        variant={variant}
        className={componentClass}
        //TouchRippleProps={{ classes: { child: classesSecondaryLarge.ripple }}}
        {...props}
      >
        {label}
      </Button>
    </div>
  )
};

