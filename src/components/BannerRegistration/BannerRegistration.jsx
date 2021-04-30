import React from 'react';
import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ResponsiveBanner from './ResponsiveBannerRegistration';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    padding: '59px 30px 66px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    height: 'auto',
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
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-end',
    }
  },
  title: {
    fontSize: '60px',
    lineHeight: '63px',
    fontStyle: 'normal',
    fontFamily: "'Nunito', sans-serif",
    color: 'rgba(0,0,0,0.87)',
    padding: '0 0 0 450px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      paddingRight: '32px',
      fontSize: '38px',
      lineHeight: '39.9px',
      padding: '0 0 0 300px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '16px',
      fontSize: '28px',
      lineHeight: '39.9px',
      padding: '0 0 0 100px',
    },
  },
  subTitle: {
    padding: '28px 137px 40px 450px',
    fontSize: '16px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '25.6px',
    fontWeight: '400',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      paddingRight: '32px',
      fontSize: '16px',
      lineHeight: '25.6px',
      padding: '18px 57px 40px 200px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '16px',
      fontSize: '16px',
      lineHeight: '25.6px',
      padding: '28px 137px 40px 150px',
    },
  },
  btn: {
alignItems: 'right !important'
  }
}));

const useStylesPrimaryLarge = makeStyles((theme) => ({
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
    [theme.breakpoints.down('md')]: {
     right: '0px'
    },
  },
}));

const BannerRegistration = () => {
  const classes = useStyles();
  const classesPrimaryLarge = useStylesPrimaryLarge();
  return (
    <Container component="section" maxWidth={false}>
      <Grid className={classes.container}>
        <ResponsiveBanner />
        <Box component="div">
          <Typography className={classes.title} component="h1" variant="h1">
            Required skills for specialist in web
          </Typography>
        </Box>
        <Hidden xsDown>
          <Typography className={classes.subTitle} variant="body2">
            A front-end developer doesn't just typeset layouts. He knows
            JavaScript well, understands frameworks and libraries (and actively
            uses some of them), understands what is "under the hood" on the
            server side. He is not afraid of preprocessors and collectors LESS,
            SASS, GRUNT, GULP, he knows how to work with the DOM, API, SVG
            objects, AJAX and CORS, can compose SQL queries and dig into data.
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography className={classes.subTitle} variant="body2">
            A front-end developer doesn't just typeset layouts. He is not afraid of preprocessors and collectors LESS,
            SASS, GRUNT, GULP.
          </Typography>
        </Hidden>
        <Box className={classes.btn} component="div">
          <Button variant="contained" className={classesPrimaryLarge.root}>
            Sign up
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};
export default BannerRegistration;
