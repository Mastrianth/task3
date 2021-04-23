import React from 'react';
import { Container, Grid, Button, makeStyles } from "@material-ui/core";
import Logo from '../../assets/icons/Logo.svg';

  const useStyle = makeStyles((theme) => ({
    container: {
        height: '60px',
        width: '100%',
        border: '1px solid #f2f2f2',
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        justifyContent: 'space-around',
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
      width:'185px',
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
    content: {
      width: '1024px',

    }
}));

  const btnPrimarySmallStyles = {
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

  const useStylesPrimarySmall = makeStyles(() => ({...btnPrimarySmallStyles}));

  const Header = () => {
    const classes = useStyle();
    const classesPrimarySmall = useStylesPrimarySmall();
    return (
        <Container className={classes.container}>
            <Grid className={classes.content} container direction="row" display="flex" justify="space-between" >
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
                <Button variant="contained" className={classesPrimarySmall.root}>Sign Up</Button>
              </Grid>
            </Grid>
          </Container>
      )
    }

export default Header;
