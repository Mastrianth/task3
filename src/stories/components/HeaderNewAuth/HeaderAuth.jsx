import React from 'react';
import { Container, Grid, Button, makeStyles, Typography } from "@material-ui/core";
import Logo from '../../assets/icons/Logo.svg';
import userLogo from "../../assets/icons/user-logo.png";
import exit from '../../assets/icons/exit.svg';

const useStyle = makeStyles((theme) => ({
  container: {
    height: '60px',
    width: '1024px',
    border: '1px solid #f2f2f2',
    boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
    padding: '0 60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: '26px',
  },
  leftMenu: {
    width: '400px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
  },
  rightMenu: {
    width:'300px',
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '62px',
    textDecoration: 'none',
  },
  langMenuItem: {
    color:'rgba(0, 0, 0, 0.87)',
    fontFamily: "'Asap', sans-serif",
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textDecoration: 'none',
    position: 'relative',
    padding: '10px',
    '&:after': {
      content: '',
      position: 'absolute',
      width: '50px',
      height: '30px',
    },
    '&:hover': {
      backgroundColor: 'rgba(234, 89, 36, 0.2)',
      width: '50px',
      height: '30px',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '4px',
    },
  },
  menuItem: {
    color:'rgba(0, 0, 0, 0.87)',
    fontFamily: "'Asap', sans-serif",
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textDecoration: 'none',
    position: 'relative',
    padding:'10px',
    '&:after': {
      content: '',
      position: 'absolute',
      width: '50px',
      height: '30px',
    },
    '&:hover': {
      backgroundColor: 'rgba(234, 89, 36, 0.2)',
      width: '50px',
      height: '30px',
      cursor: 'pointer',
      padding:'10px',
      borderRadius: '4px',
    },
  },
  langMenuItemSelected: {
    fontFamily: "'Asap', sans-serif",
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: '400',
    textAlign: 'left',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textDecoration: 'none',
    color: 'rgba(234, 89, 36, 1)',
    cursor: 'default !important',
    pointerEvents: 'none',
  },
  userTitle: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: '17px',
    color: 'rgba(0,0,0,0.87)',
    fontSize: '12px',
  },
  userSubtitle: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '140%',
  },
  userLogo: {
    width: '38px',
    height: '38px'
  },
  exit: {
    position: 'relative',
    padding:'10px',
    '&:after': {
      content: '',
      position: 'absolute',
      width: '50px',
      height: '30px',
    },
    '&:hover': {
      backgroundColor: 'rgba(234, 89, 36, 0.2)',
      width: '38px',
      height: '38px',
      cursor: 'pointer',
      padding:'10px',
      borderRadius: '4px',
      fill: 'rgba(234, 89, 36, 0.2)'
    },
  }
}));



const HeaderAuth = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Grid container direction="row" display="flex" justify="space-between" >
        <Grid className={classes.leftMenu} direction="row" justify="flex-start" alignItems="left" container>
          <Grid item><img className={classes.logo} src={Logo} alt="logo Pupvote" /></Grid>
          <Grid item><a className={classes.menuItem} href="#">About me</a></Grid>
          <Grid item><a className={classes.menuItem} href="#">Relationship</a></Grid>
          <Grid item><a className={classes.menuItem} href="#">Users</a></Grid>
        </Grid>

        <Grid className={classes.rightMenu} direction="row" justify="flex-end" alignItems="right" container>
          <Grid className={classes.langMenu} container>
            <Grid item><a className={classes.langMenuItemSelected} href="#">En</a></Grid>
            <Grid item><a className={classes.langMenuItem} href="#">De</a></Grid>
          </Grid>
         <Grid item><img className={classes.userLogo} src={userLogo} alt="user Logo" /></Grid>
         <Grid item>
           <Typography className={classes.userTitle}>Maximilian</Typography>
           <Typography className={classes.userSubtitle}>Maximilian@gmail.com</Typography>
         </Grid>
          <Grid><img className={classes.exit} src={exit} alt="exit" /></Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeaderAuth;
