import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Programmer from '../../assets/icons/Programmer.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    padding: '59px 30px 66px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    height: '752px',
    maxWidth: '1140px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      padding: '59px 30px 66px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '59px 30px 66px',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '106px 30px 116px',
    },
  },
  title: {
    fontSize: '60px',
    lineHeight: '63px',
    fontStyle: 'normal',
    fontFamily: "'Nunito', sans-serif",
    color: 'rgba(0,0,0,0.87)',
    padding: '0 11px',
    maxWidth: '472px',
  },
  subTitle: {
    minWidth: '330px',
    maxWidth: '527px',
    padding: '28px 11px 40px',
    fontSize: '16px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '25.6px',
    fontWeight: '400',
  },
  subTitle2: {
    minWidth: '330px',
    maxWidth: '508px',
    padding: '28px 11px 0px',
    fontSize: '28px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '39.2px',
    fontWeight: '400',
  },
  img: {
    position: 'absolute',
    right: '100px',
    objectFit: 'cover',
    zIndex: '-1',
    width: '387px',
    height: '340px',
  },
}));

export const btnSecondaryLargeStyles = {
  root: {
    width: '148px',
    height: '50px',
    fontWeight: '400',
    textTransform: 'capitalize',
    fontSize: '18px',
    boxShadow: 'none',
    textAlign: 'center',
    fontFamily: 'Asap',
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
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '& > .MuiTouchRipple-root': {
      color: 'rgba(0, 0, 0, 0.87)',
    },
    '& > .MuiButton-label': {
      position: 'absolute',
      zIndex: '10',
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

const useStylesSecondaryLarge = makeStyles(() => ({
  ...btnSecondaryLargeStyles,
}));

const Acquainted = () => {
  const classes = useStyles();
  const classesSecondaryLarge = useStylesSecondaryLarge();
  return (
    <Container component="section" maxWidth={false}>
      <Grid className={classes.container} direction="column" container>
        <Box item className={classes.wrapperImg}>
          <img
            src={Programmer}
            alt="man with laptop"
            className={classes.img}
            loading="lazy"
          />
        </Box>
        <Typography className={classes.title} component="h1" variant="h1">
          Let's get acquainted
        </Typography>
        <Typography className={classes.subTitle2} component="h4" variant="h4">
          I'm a good front-end developer
        </Typography>
        <Typography className={classes.subTitle} variant="body2">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Typography>
        <Button variant="contained" className={classesSecondaryLarge.root}>
          Sign up
        </Button>
      </Grid>
    </Container>
  );
};
export default Acquainted;
