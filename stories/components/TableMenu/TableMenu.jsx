import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import userLogo from "../../assets/icons/user-logo.png";
import Logo from "../../assets/icons/Logo.svg";

// const title = {
//
// }

const items1 = ["News", "Blog", "Partners", "Shop"];
const items2 = ["Overview", "Design", "Code", "Collaborate"];
const items3 = ["Tutorials", "Resources", "Guides", "Examples"];
const items4 = ["FAQ", "Terms", "Conditions", "Help"];

const useStyles = makeStyles((theme) => ({
  userImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
  },
  userTitle: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "25px",
    color: "rgba(0,0,0,0.87)",
    fontSize: "18px",
  },
  userSubtitle: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "140%",
    color: "#7e7e7e",
    paddingBottom: "20px",
  },
  MenuItemText: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
    color: "rgba(0,0,0,0.87)",
    fontSize: "16px",
    paddingLeft: "25px",
    position: "relative",
    // "&:after": {
    //   content: "",
    //   position: "absolute",
    //   width: "254px",
    //   height: "40px",
    // },
    // "&:hover": {
    //   backgroundColor: "rgba(0, 189, 211, 0.1)",
    //   color: "#00BDD3",
    //   width: "254px",
    //   height: "40px",
    //   cursor: "pointer",
    // },
    // "&:hover path": {
    //   fill: "#00BDD3",
    // },
  },
  svgIcon1: {
    paddingTop: "5px",
    paddingLeft: "2px",
    paddingRight: "3px",
    paddingBottom: "20px",
    "&:hover path": {
      fill: "#00BDD3",
      backgroundColor: "rgba(0, 189, 211, 0.1)",
    },
  },
  svgIcon2: {
    paddingTop: "5px",
    paddingRight: "1px",
    paddingBottom: "20px",
    "&:hover path": {
      fill: "#00BDD3",
    },
  },
  svgIcon3: {
    paddingTop: "5px",
    paddingRight: "0",
    paddingBottom: "20px",
    "&:hover path": {
      fill: "#00BDD3",
    },
  },
  svgIcon4: {
    paddingTop: "5px",
    paddingRight: "2px",
    paddingLeft: "2px",
    paddingBottom: "20px",
    "&:hover path": {
      fill: "#00BDD3",
    },
  },
  pupLogo: {
    width: "100px",
    height: "26px",
  },
  logo: {
    paddingBottom: "30px",
  },
  subTitle: {
    fontFamily: "'Asap', sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "17px",
    color: "rgba(0,0,0,0.87)",
    fontSize: "12px",
    paddingBottom: "10px",
  },
  svgIcon5: {
    paddingTop: "5px",
    paddingRight: "7px",
    paddingBottom: "20px",
    "&:hover path": {
      fill: "#00BDD3",
    },
  },
  hr: {
    border: "1px solid #F4E041",
    width: "270px",
    height: "1px",
  },
  mainContainer: {
    width: "370px",
  },
  rightBack: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "500px",
    left: "630px",
    height: "1350px",
    position: "absolute",
  },
  hover: {
    position: "relative",
    "&:after": {
      content: "",
      position: "absolute",
      width: "225px",
      height: "40px",
    },
    "&:hover p": {
      backgroundColor: "rgba(0, 189, 211, 0.1)",
      color: "#00BDD3",
      width: "225px",
      height: "40px",
      cursor: "pointer",
    },
    "&:hover path": {
      fill: "#00BDD3",
      backgroundColor: "rgba(0, 189, 211, 0.1)",
    },
    "&:hover svg": {
      backgroundColor: "rgba(0, 189, 211, 0.1)",
    },
  },
}));

const TableMenu = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Grid
        direction="row-reverse"
        className={classes.rightBack}
        container
        alignItems="stretch"
      />
      <Grid className={classes.logo}>
        <img className={classes.pupLogo} src={Logo} alt="Logo" />
      </Grid>
      <Grid
        direction="column"
        justify="center"
        alignItems="flex-start"
        container
      >
        <Grid item>
          <img className={classes.userImage} src={userLogo} alt="user logo" />
        </Grid>
        <Grid item>
          <Typography className={classes.userTitle}>Maximilian</Typography>
          <Typography className={classes.userSubtitle}>
            Maximilian@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.hover} container>
          <Grid className={classes.svgIcon1} item>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                fill="#D0CFCF"
              />
            </svg>
          </Grid>
          <Grid item>
            <Typography className={classes.MenuItemText}>About me</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.hover} container>
          <Grid className={classes.svgIcon2} item>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8V0H13V3H7V0H0V8H7V5H9V15H13V18H20V10H13V13H11V5H13V8H20Z"
                fill="#D0CFCF"
              />
            </svg>
          </Grid>
          <Grid item>
            <Typography className={classes.MenuItemText}>
              Relationship
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.hover} container>
          <Grid className={classes.svgIcon3} item>
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H13C13.55 14 14 13.55 14 13V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C14.05 8.06 14.06 8.08 14.07 8.09C15.21 8.92 16 10.03 16 11.5V13C16 13.35 15.93 13.69 15.82 14H21C21.55 14 22 13.55 22 13V11.5C22 9.17 17.33 8 15 8Z"
                fill="#D0CFCF"
              />
            </svg>
          </Grid>
          <Grid item>
            <Typography className={classes.MenuItemText}>Users</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.hover} container>
          <Grid className={classes.svgIcon4} item>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
                fill="#D0CFCF"
              />
            </svg>
          </Grid>
          <Grid item>
            <Typography className={classes.MenuItemText}>Quit</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TableMenu;
