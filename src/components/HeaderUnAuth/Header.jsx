import React from 'react';
import {
  Container,
  Grid,
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Link,
  Box,
  List,
  ListItem,
  Hidden,
  Typography,
  Menu,
  Paper,
} from '@material-ui/core';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import Logo from '../../assets/icons/Logo.svg';
import defaultAvatar from '../../assets/icons/defaultAvetar.svg';
import exit from '../../stories/assets/icons/exit.svg';
import england from '../../stories/assets/icons/england.svg';
import SelectArrow from '../../stories/assets/icons/caret-down.svg';
import MenuBurger from '../../stories/assets/icons/Menu.svg';
import MenuItemCustom from '../../stories/components/MenuItemCustom';
import germany from '../../stories/assets/icons/germany.svg';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '60px',
    width: '100%',
    border: '1px solid #f2f2f2',
    boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px'
    }
  },
  logo: {
    width: '100px',
    height: '26px',
  },
  leftMenu: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingRight: '220px',
  },
  rightMenu: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  langMenuItem: {
    color: 'rgba(0, 0, 0, 0.87)',
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
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '4px',
      textDecoration: 'none',
    },
  },
  menuItem: {
    color: 'rgba(0, 0, 0, 0.87)',
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
      textDecoration: 'none',
      width: '50px',
      height: '30px',
    },
    '&:hover': {
      backgroundColor: 'rgba(234, 89, 36, 0.2)',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '4px',
      textDecoration: 'none',
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
  toolbar: {
    width: '1140px',
    justifyContent: 'space-between',
  },
  listItem: {
    width: 'inherit',
    paddingBottom: '2px',
    paddingLeft: '29px',
    display: 'inline-block',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  navList: {
    justifyContent: 'space-between',
    fontSize: '14px',
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
    color: 'rgba(0,0,0,0.87)',
  },
  userLogo: {
    width: '38px',
    height: '38px',
  },
  exit: {
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
      width: '38px',
      height: '38px',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '4px',
      fill: 'rgba(234, 89, 36, 0.2)',
    },
  },
  arrow: {
    width: '10px',
    height: '5px',
    cursor: 'pointer',
  },
  eng: {
    cursor: 'pointer',
    paddingRight: '10px',
  },
  words: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '26px',
    color: 'rgba(0,0,0,0.87)',
    fontSize: '16px',
    cursor: 'pointer',
    paddingRight: '5px',
  },
  drop: {
    backgroundColor: '#fff !important',
    width: '92px',
    justifyContent: 'center',
    borderRadius: '4px',
  },
  burger: {
    cursor: 'pointer',
    paddingLeft: '30px',
  },
  mobileContainer: {
    padding: '20px',
  },
  list: {
    width: 270,
  },
  fullList: {
    width: 'auto',
  },
  divider: {
    backgroundColor: '#F4E041',
  },
  mobileMenuItems: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
    color: "rgba(0,0,0,0.87)",
    fontSize: "16px",
    position: "relative",
    // "&:after": {
    //   content: "",
    //   position: "absolute",
    //   width: "225px",
    //   height: "40px",
    // },
    // "&:hover": {
    //   backgroundColor: "rgba(0, 189, 211, 0.1)",
    //   color: "#00BDD3",
    //   width: "100%",
    //   height: "auto",
    //   cursor: "pointer",
    //   fill: "#00BDD3",
    // },
    // "&:hover img": {
    //   fill: "#00BDD3",
    //   backgroundColor: "rgba(0, 189, 211, 0.1)",
    // },
    // "&:hover svg": {
    //   backgroundColor: "rgba(0, 189, 211, 0.1)",
    // },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About me', 'Relationship', 'Users', 'Quit'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0
                ? <PersonIcon />
                : index === 1
                  ? <AccountTreeIcon />
                  : index === 2
                    ? <PeopleAltIcon />
                    : <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText className={classes.mobileMenuItems} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        <Typography style={{paddingLeft: '20px',paddingTop: "17px"}} className={classes.userSubtitle}>Information</Typography>
        {['News', 'Blog', 'Partners', 'Shop'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        <Typography style={{paddingLeft: '20px',paddingTop: "17px"}} className={classes.userSubtitle}>About</Typography>
        {['Overview', 'Design', 'Code', 'Collaborate'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        <Typography style={{paddingLeft: '20px',paddingTop: "17px"}} className={classes.userSubtitle}>Tools</Typography>
        {['Tutorials', 'Resources', 'Guides', 'Examples'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        <Typography style={{paddingLeft: '20px',paddingTop: "17px"}} className={classes.userSubtitle}>Support</Typography>
        {['FAQ', 'Terms', 'Conditions', 'Help'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="sticky" color="inherit" className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Link component="a" href="#">
          <img className={classes.logo} src={Logo} alt="logo Pupvote" />
        </Link>
        <Hidden mdDown>
          <Box className={classes.leftMenu} component="div">
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.menuItem}>About me</Typography>
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.menuItem}>Relationship</Typography>
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.menuItem}>Users</Typography>
            </Link>
          </Box>
          <Box className={classes.rightMenu} component="div">
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.langMenuItemSelected}>
                En
              </Typography>
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.langMenuItem}>De</Typography>
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <img
                className={classes.userLogo}
                src={defaultAvatar}
                alt="user logo"
              />
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <Typography className={classes.userTitle}>Maximilian</Typography>
              <Typography className={classes.userSubtitle}>
                Maximilian@gmail.com
              </Typography>
            </Link>
            <Link className={classes.listItem} component="a" href="#">
              <img className={classes.exit} src={exit} alt="exit" />
            </Link>
          </Box>
        </Hidden>
        <Hidden lgUp>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className={classes.mobileContainer}
          >
            <Grid className={classes.eng} item>
              <img onClick={handleClick} src={england} alt="england" />
            </Grid>
            <Grid align="right" item>
              <Typography
                aria-controls="simple-menu"
                aria-haspopup="true"
                keepMounted
                onClick={handleClick}
                className={classes.words}
              >
                En
              </Typography>
            </Grid>
            <Grid align="right" item>
              <img
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.arrow}
                src={SelectArrow}
                alt="arrow"
              />
            </Grid>
            <Grid align="right" item>
              <a style={{ padding: '15px' }} href="#">
                <div>
                  {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>
                        <img
                          className={classes.burger}
                          src={MenuBurger}
                          alt="menu"
                        />
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </a>
            </Grid>
          </Grid>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Paper>
              <MenuItemCustom className={classes.drop} onClick={handleClose}>
                <img src={england} alt="england" />
                {' '}
                En
              </MenuItemCustom>
              <MenuItemCustom className={classes.drop} onClick={handleClose}>
                <img src={germany} alt="germany" />
                {' '}
                De
              </MenuItemCustom>
            </Paper>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
