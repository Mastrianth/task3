import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import Logo from '../../assets/icons/Logo.svg';
import './Menu.scss';


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

export const Menu = () => {
  const classesPrimarySmall = useStylesPrimarySmall();
  return (
    <div className={'menu-wrapper'}>
      <span className={"left-menu"}>
        <img src={Logo} alt={"Logo"}/>
          <a href={"#"} onClick={(e)=> e.preventDefault()}>About me</a>
          <a href={"#"}>Relationship</a>
          <a href={"#"}>Users</a>
      </span>

      <span className={"right-menu"}>
        <span className={"lang-menu"}>
          <a href={"#"} onClick={(e)=> e.preventDefault()} className={'selected'}>En</a>
          <a href={"#"}>De</a>
        </span>
        <Button variant={'contained'} className={classesPrimarySmall.root}>Sign Up</Button>
      </span>
    </div>
  );
};

