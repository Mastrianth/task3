import React from 'react';
import './Header_auth.scss';
import Logo from '../../assets/icons/Logo.svg';
import UserLogo from '../../assets/icons/authorized.png';

export const Menu2 = () => {
  return (
    <div className={'menu-wrapper'}>
      <span className={"left-menu"}>
        <img src={Logo} alt={"Logo"}/>
          <a href={"#"} onClick={(e)=> e.preventDefault()}>About me</a>
          <a href={"#"}>Relationship</a>
          <a href={"#"}>Users</a>
      </span>

      <span className={"right-menu-authorized"}>
        <span className={"lang-menu"}>
          <a href={"#"} onClick={(e)=> e.preventDefault()} className={'selected'}>En</a>
          <a href={"#"}>De</a>
        </span>
        <span className={"authorized-menu"}>
          <span className={"user-logo-menu"}>
            <img className={"user-logo"} src={UserLogo}/>
            <span>
              <div className={'menu-user-name'}>Maximilian</div>
              <div className={'menu-user-email'}>Maximilian@gmail.com</div>
            </span>
          </span>
          <a href={"#"} className={'menu-user-exit'}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
              fill="#7E7E7E"/>
            </svg>
          </a>
        </span>
      </span>
    </div>
  );
};
