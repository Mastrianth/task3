import React from 'react';
import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '500px',
  },
  link: {
    color: '#0052b4',
    fontStyle: 'normal',
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '25px',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linkFooter: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: "'Asap', sans-serif",
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textDecoration: 'none',
    '&:hover': {
      color: '#0052B4',
    },
  },
}));

const Links = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="body1">
            <a className={classes.link} href="#">
              Normal Link
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <a className={classes.linkFooter} href="#">
              Footer Link
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Links;
