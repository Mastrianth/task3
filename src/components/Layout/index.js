import PropTypes from 'prop-types';
import React, {
  memo, useEffect, useState, useContext,
} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SideDrawer from '../SideDrawer';
import classes from './Layout.module.scss';
import MyContext from '../../utils/context';

const Layout = ({ children }) => {
  const { isGoogleSpeedTest } = useContext(MyContext);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className={classes.siteWrapper}>
        <Header userName="Maximilian" userEmail="MaximilianMaximilian@gmail.com" logOut={() => { console.log('Log out'); }} />
        {children}
        <Footer />
      </div>
      <SideDrawer deactivate={() => { console.log('click'); }} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
