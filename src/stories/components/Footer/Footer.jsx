import React from "react";
import {
  Container,
  Grid,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Logo from "../../assets/icons/Logo.svg";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "60px",
    width: "1024px",
    borderBottom: "1px solid #F4E041",
    boxShadow: "none",
    padding: "0 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    height: "26px",
  },
  leftMenu: {
    width: "400px",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
  rightMenu: {
    color: "rgba(0, 0, 0, 0.87)",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "62px",
    textDecoration: "none",
  },
  langMenuItem: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
  },
  menuItem: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
  },
}));

const useStylesFooterRows = makeStyles((theme) => ({
  title: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
    "&:hover": {
      color: "#0052B4",
    },
  },
  subTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
    "&:hover": {
      color: "#0052B4",
    },
  },
  rightFoot: {
    paddingLeft: "100px",
    alignItems: "right",
  },
  container: {
    paddingTop: "25px",
    paddingLeft: "55px",
  },
  rightSubTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
    "&:hover": {
      color: "#0052B4",
    },
  },
  rightTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "'Asap', sans-serif",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: "0em",
    textDecoration: "none",
    "&:hover": {
      color: "#0052B4",
    },
  },
  footer: {
    paddingTop: "100px",
    paddingLeft: "50px",
  },
  footerIcons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerIconsLink: {
    border: "1px solid #f4e041",
    borderRadius: "50%",
    paddingLeft: "10px",
    paddingTop: "10px",
    width: "40px",
    height: "40px",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&:after": {
      content: "",
      position: "absolute",
      width: "40px",
      height: "40px",
    },
    "&:hover": {
      border: "1px solid #ea5924",
    },
    "&:hover path": {
      fill: "#EA5924",
    },
  },
}));

const Footer = () => {
  const classes = useStyle();
  const classesFooter = useStylesFooterRows();
  return (
    <Container>
      <Grid
        className={classes.container}
        container
        direction="row"
        display="flex"
        justify="space-between"
      >
        <Grid
          className={classes.leftMenu}
          direction="row"
          justify="flex-start"
          alignItems="left"
          container
        >
          <Grid item>
            <img className={classes.logo} src={Logo} alt="logo Pupvote" />
          </Grid>
          <Grid item>
            <a className={classes.menuItem} href="#">
              About me
            </a>
          </Grid>
          <Grid item>
            <a className={classes.menuItem} href="#">
              Relationship
            </a>
          </Grid>
          <Grid item>
            <a className={classes.menuItem} href="#">
              Users
            </a>
          </Grid>
        </Grid>
        <Grid
          className={classes.rightMenu}
          direction="row"
          justify="flex-end"
          alignItems="right"
          container
        >
          <Grid item>
            <a
              style={{ color: "#ea5924" }}
              className={classes.langMenuItem}
              href="#"
            >
              En
            </a>
          </Grid>
          <Grid item>
            <a className={classes.langMenuItem} href="#">
              De
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className={classesFooter.container}
        display="flex"
        direction="row"
        justify="space-around"
        container
        spacing={8}
      >
        <Grid
          display="flex"
          direction="row"
          justify="flex-start"
          alignItems="left"
          item
        >
          <Typography>
            <a className={classesFooter.title} href="#">
              Information
            </a>{" "}
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              News
            </a>{" "}
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Blog
            </a>{" "}
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Partners
            </a>{" "}
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Shop
            </a>{" "}
          </Typography>
        </Grid>
        <Grid
          display="flex"
          direction="row"
          justify="flex-start"
          alignItems="left"
          item
        >
          <Typography>
            <a className={classesFooter.title} href="#">
              About
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Overview
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Design
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Code
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Collaborate
            </a>
          </Typography>
        </Grid>
        <Grid
          display="flex"
          direction="row"
          justify="flex-start"
          alignItems="left"
          item
        >
          <Typography>
            <a className={classesFooter.title} href="#">
              Tools
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Tutorials
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Resources
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Guides
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Examples
            </a>
          </Typography>
        </Grid>
        <Grid
          display="flex"
          direction="row"
          justify="flex-start"
          alignItems="left"
          item
        >
          <Typography>
            <a className={classesFooter.title} href="#">
              Support
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              FAQ
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Terms
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Conditions
            </a>
          </Typography>
          <Typography>
            <a className={classesFooter.subTitle} href="#">
              Help
            </a>
          </Typography>
        </Grid>
        <Grid
          className={classesFooter.rightFoot}
          display="flex"
          direction="row"
          justify="flex-end"
          align="right"
          item
        >
          <Typography className={classesFooter.rightFoot}>
            <a className={classesFooter.rightTitle} href="#">
              Contacts
            </a>
          </Typography>
          <Typography className={classesFooter.rightFoot}>
            <a className={classesFooter.rightSubTitle} href="#">
              work.of.future@gmail.com
            </a>
          </Typography>
          <Typography className={classesFooter.rightFoot}>
            <a className={classesFooter.rightSubTitle} href="#">
              +38 (050) 789 24 98
            </a>
          </Typography>
          <Typography className={classesFooter.rightFoot}>
            <a className={classesFooter.rightSubTitle} href="#">
              +38 (050) 789 65 34
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        className={classesFooter.footer}
        direction="row"
        justify="space-between"
        container
      >
        <Grid item>
          <Typography className={classesFooter.subTitle}>
            @abz.agency specially for the test task
          </Typography>
        </Grid>
        <Grid className={classesFooter.footerIcons} item>
          <a className={classesFooter.footerIconsLink} href="#">
            <svg
              width="9"
              height="19"
              viewBox="0 0 9 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.35749 3.19339H9.00073V0.338355C8.71723 0.29945 7.74224 0.211914 6.60674 0.211914C4.23749 0.211914 2.6145 1.69854 2.6145 4.43087V6.94548H0V10.1372H2.6145V18.1681H5.81999V10.1379H8.32873L8.72698 6.94623H5.81924V4.74734C5.81999 3.82485 6.06899 3.19339 7.35749 3.19339Z"
                fill="#D0CFCF"
              />
            </svg>
          </a>
          <a className={classesFooter.footerIconsLink} href="#">
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.75 2.33765C20.9412 2.69815 20.0793 2.93711 19.1808 3.05313C20.1052 2.49235 20.8107 1.61111 21.1424 0.548938C20.2805 1.07105 19.329 1.43984 18.3149 1.64565C17.4965 0.760268 16.3302 0.211914 15.0578 0.211914C12.5892 0.211914 10.6018 2.24787 10.6018 4.74378C10.6018 5.1029 10.6317 5.44821 10.7051 5.77695C6.99806 5.59324 3.71789 3.78796 1.51434 1.0379C1.12964 1.71609 0.903984 2.49235 0.903984 3.328C0.903984 4.8971 1.69922 6.28801 2.88459 7.09327C2.1682 7.07946 1.46541 6.86813 0.87 6.53525C0.87 6.54906 0.87 6.56702 0.87 6.58498C0.87 8.78668 2.41561 10.6154 4.44244 11.0367C4.07948 11.1376 3.68391 11.1859 3.27338 11.1859C2.98791 11.1859 2.69972 11.1693 2.4292 11.1086C3.00694 12.9028 4.64634 14.2219 6.59569 14.2647C5.07863 15.4705 3.15239 16.1971 1.06711 16.1971C0.701438 16.1971 0.350719 16.1805 0 16.1349C1.97517 17.4291 4.31602 18.1681 6.84037 18.1681C15.0456 18.1681 19.5315 11.2619 19.5315 5.27556C19.5315 5.07528 19.5247 4.8819 19.5152 4.68991C20.4001 4.05177 21.1437 3.2548 21.75 2.33765Z"
                fill="#D0CFCF"
              />
            </svg>
          </a>
          <a className={classesFooter.footerIconsLink} href="#">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9508 5.4911C17.9087 4.53701 17.754 3.88109 17.5325 3.31272C17.3039 2.70941 16.9523 2.16927 16.4916 1.72025C16.0415 1.26424 15.4964 0.909904 14.8986 0.685462C14.3256 0.464446 13.6715 0.310159 12.7151 0.268093C11.7515 0.222465 11.4456 0.211914 9.00179 0.211914C6.55795 0.211914 6.25205 0.222465 5.29207 0.26453C4.33566 0.306596 3.67813 0.46102 3.10851 0.681899C2.5036 0.909904 1.96214 1.26068 1.51202 1.72025C1.0549 2.16927 0.699831 2.71298 0.474704 3.30929C0.253148 3.88109 0.0984846 4.53345 0.0563161 5.48753C0.0105764 6.44874 0 6.75389 0 9.19178C0 11.6297 0.0105764 11.9348 0.0527449 12.8925C0.0949133 13.8466 0.249714 14.5025 0.47127 15.0708C0.699831 15.6742 1.0549 16.2143 1.51202 16.6633C1.96214 17.1193 2.50717 17.4737 3.10494 17.6981C3.67813 17.9191 4.33209 18.0734 5.28864 18.1155C6.24848 18.1577 6.55451 18.1681 8.99836 18.1681C11.4422 18.1681 11.7481 18.1577 12.7081 18.1155C13.6645 18.0734 14.322 17.9191 14.8916 17.6981C16.1013 17.2315 17.0578 16.2775 17.5254 15.0708C17.7469 14.4991 17.9017 13.8466 17.9438 12.8925C17.986 11.9348 17.9966 11.6297 17.9966 9.19178C17.9966 6.75389 17.993 6.44874 17.9508 5.4911ZM16.3299 12.8223C16.2912 13.6993 16.1435 14.1728 16.0204 14.4885C15.718 15.2708 15.0956 15.8916 14.3114 16.1933C13.995 16.3161 13.5168 16.4634 12.6412 16.5019C11.6918 16.5441 11.407 16.5545 9.00537 16.5545C6.60369 16.5545 6.31538 16.5441 5.3694 16.5019C4.49032 16.4634 4.01562 16.3161 3.69915 16.1933C3.30892 16.0495 2.95371 15.8215 2.6654 15.5233C2.36651 15.2321 2.13795 14.8813 1.99373 14.4921C1.87066 14.1764 1.723 13.6993 1.6844 12.8259C1.6421 11.8788 1.63166 11.5946 1.63166 9.19877C1.63166 6.80294 1.6421 6.51533 1.6844 5.5718C1.723 4.69486 1.87066 4.22131 1.99373 3.90561C2.13795 3.5162 2.36651 3.162 2.66897 2.87425C2.96072 2.57609 3.31235 2.34809 3.70272 2.20435C4.01919 2.08158 4.49746 1.93428 5.37297 1.89564C6.32238 1.85357 6.60726 1.84302 9.0088 1.84302C11.414 1.84302 11.6988 1.85357 12.6448 1.89564C13.5238 1.93428 13.9985 2.08158 14.315 2.20435C14.7052 2.34809 15.0605 2.57609 15.3488 2.87425C15.6476 3.16542 15.8762 3.5162 16.0204 3.90561C16.1435 4.22131 16.2912 4.69829 16.3299 5.5718C16.3721 6.5189 16.3826 6.80294 16.3826 9.19877C16.3826 11.5946 16.3721 11.8752 16.3299 12.8223Z"
                fill="#D0CFCF"
              />
              <path
                d="M9.00177 4.5791C6.449 4.5791 4.37781 6.64512 4.37781 9.1918C4.37781 11.7385 6.449 13.8045 9.00177 13.8045C11.5547 13.8045 13.6257 11.7385 13.6257 9.1918C13.6257 6.64512 11.5547 4.5791 9.00177 4.5791ZM9.00177 12.1839C7.34567 12.1839 6.00232 10.844 6.00232 9.1918C6.00232 7.53959 7.34567 6.19966 9.00177 6.19966C10.658 6.19966 12.0012 7.53959 12.0012 9.1918C12.0012 10.844 10.658 12.1839 9.00177 12.1839Z"
                fill="#D0CFCF"
              />
              <path
                d="M14.8882 4.39717C14.8882 4.99185 14.4048 5.47403 13.8086 5.47403C13.2124 5.47403 12.7291 4.99185 12.7291 4.39717C12.7291 3.80236 13.2124 3.32031 13.8086 3.32031C14.4048 3.32031 14.8882 3.80236 14.8882 4.39717Z"
                fill="#D0CFCF"
              />
            </svg>
          </a>
          <a className={classesFooter.footerIconsLink} href="#">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9955 18.1732V18.1725H18V11.5871C18 8.36547 17.3048 5.88379 13.5293 5.88379C11.7143 5.88379 10.4963 6.87736 9.99901 7.81931H9.94651V6.18455H6.36676V18.1725H10.0943V12.2365C10.0943 10.6736 10.3913 9.16228 12.3315 9.16228C14.2433 9.16228 14.2718 10.9459 14.2718 12.3368V18.1732H17.9955Z"
                fill="#D0CFCF"
              />
              <path
                d="M0.296997 6.18457H4.02899V18.1725H0.296997V6.18457Z"
                fill="#D0CFCF"
              />
              <path
                d="M2.1615 0.216797C0.96825 0.216797 0 1.18268 0 2.37302C0 3.56335 0.96825 4.54944 2.1615 4.54944C3.35475 4.54944 4.323 3.56335 4.323 2.37302C4.32225 1.18268 3.354 0.216797 2.1615 0.216797V0.216797Z"
                fill="#D0CFCF"
              />
            </svg>
          </a>
          <a className={classesFooter.footerIconsLink} href="#">
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75117 0.211914C2.69014 0.212662 0 3.36626 0 6.80492C0 8.3993 0.916201 10.3887 2.3832 11.0194C2.80168 11.2027 2.74629 10.979 3.10631 9.63979C3.13478 9.52831 3.12016 9.43179 3.02785 9.3278C0.930817 6.96877 2.6186 2.11904 7.45192 2.11904C14.4469 2.11904 13.1399 11.5327 8.66891 11.5327C7.51654 11.5327 6.65803 10.6528 6.92959 9.56422C7.25883 8.26762 7.90348 6.87375 7.90348 5.93927C7.90348 3.58398 4.2956 3.93338 4.2956 7.05406C4.2956 8.01847 4.64639 8.66939 4.64639 8.66939C4.64639 8.66939 3.48556 13.2303 3.27017 14.0825C2.90553 15.525 3.3194 17.8601 3.35556 18.0614C3.37787 18.1721 3.50556 18.2073 3.57711 18.116C3.69173 17.9701 5.09488 16.0233 5.48797 14.616C5.63106 14.1035 6.21801 12.0235 6.21801 12.0235C6.60495 12.7029 7.7204 13.2715 8.90892 13.2715C12.4445 13.2715 15 10.2488 15 6.49816C14.9877 2.90239 11.8237 0.211914 7.75117 0.211914V0.211914Z"
                fill="#D0CFCF"
              />
            </svg>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
