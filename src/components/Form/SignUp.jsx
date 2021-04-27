import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 16px 80px',
    backgroundColor: '#fafafa',
    textAlign: 'center',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '122px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '161px',
    },
  },
  titleH2: {
    padding: '68px 0 2px 1px',
    [theme.breakpoints.up('md')]: {
      padding: '112px 0 16px',
      fontSize: '60px',
      lineHeight: '63px',
      fontFamily: "'Nunito', sans-serif",
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'center',
      color: 'rgba(0,0,0,0.87)',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '155px 0 20px',
      fontSize: '60px',
    },
  },
  titleH3: {
    fontSize: '28px',
    lineHeight: '39.2px',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.87)',
  },
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <>
      <Container component="section" maxWidth={false} className={classes.root}>
        <Typography component="h2" variant="h2" className={classes.titleH2}>
          Register to get a work
        </Typography>
        <Typography component="h3" variant="h4" className={classes.titleH3}>
          Your personal data is stored according to the Privacy Policy
        </Typography>
      </Container>
    </>
  );
};

export default SignUp;
