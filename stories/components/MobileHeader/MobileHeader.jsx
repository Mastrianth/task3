import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import Logo from "../../assets/icons/Logo.svg";
import SelectArrow from "../../assets/icons/caret-down.svg";
import MenuBurger from "../../assets/icons/Menu.svg";
import MenuItemCustom from "../MenuItemCustom";
import england from "../../assets/icons/england.svg";
import germany from "../../assets/icons/germany.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "360px",
    boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
    height: "60px",
  },
  arrow: {
    width: "10px",
    height: "5px",
    cursor: "pointer",
  },
  pupLogo: {
    align: "left",
    paddingLeft: "20px",
    cursor: "pointer",
  },
  eng: {
    paddingLeft: "120px",
    cursor: "pointer",
  },
  words: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
    color: "rgba(0,0,0,0.87)",
    fontSize: "16px",
    cursor: "pointer",
  },
  drop: {
    backgroundColor: "#fff !important",
    width: "92px",
    justifyContent: "center",
    borderRadius: "4px",
  },
  burger: {
    cursor: "pointer",
  },
}));

const MobileHeader = () => {
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
  return (
    <Container>
      <Grid className={classes.container} container>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid align="left">
            <img className={classes.pupLogo} src={Logo} alt="Logo" />
          </Grid>
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
            <a style={{ padding: "15px" }} href="#">
              {" "}
              <img className={classes.burger} src={MenuBurger} alt="menu" />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Paper>
          <MenuItemCustom className={classes.drop} onClick={handleClose}>
            <img src={england} alt="england" /> En
          </MenuItemCustom>
          <MenuItemCustom className={classes.drop} onClick={handleClose}>
            <img src={germany} alt="germany" /> De
          </MenuItemCustom>
        </Paper>
      </Menu>
    </Container>
  );
};

export default MobileHeader;
