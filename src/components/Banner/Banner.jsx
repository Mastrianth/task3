import React from 'react';
import {
  Box,
  Container,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ResponsiveBanner from './ResponsiveBanner';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    padding: '70px 120px 75px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    height: '650px',
    // [theme.breakpoints.up('sm')]: {
    //   padding: '59px 30px 66px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   padding: '59px 30px 66px',
    //   textAlign: 'left',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   padding: '106px 30px 116px',
    // },
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
}));

const btnPrimaryLargeStyles = {
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
      // border: "2px solid #40a5f5",
      boxShadow: 'none',
    },
  },
};

const useStylesPrimaryLarge = makeStyles(() => ({ ...btnPrimaryLargeStyles }));

const Banner = () => {
  const classes = useStyles();
  const classesPrimaryLarge = useStylesPrimaryLarge();
  return (
    <Container
      component="section"
      maxWidth={false}
      className={classes.container}
    >
      <ResponsiveBanner />

      <Box component="div">
        <Typography className={classes.title} component="h1" variant="h1">
          Test assigment for front-end developers
        </Typography>
      </Box>
      <Hidden smDown>
        <Typography className={classes.subTitle} variant="body2">
          Front-end developers make sure the user sees and interacts with all
          the necessary elements to ensure conversion. Therefore, responsive
          design, programming languages and specific frameworks are the
          must-have skillsets to look for when assessing your front-end
          developers.
        </Typography>
      </Hidden>
      <Button variant="contained" className={classesPrimaryLarge.root}>
        Sign up
      </Button>
    </Container>
  );
};
export default Banner;
