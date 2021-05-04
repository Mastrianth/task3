import PropTypes from 'prop-types';
import React, {
  memo, useEffect, useState, useContext,
} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import classes from './Layout.module.scss';

const Layout = ({ children, isPageSpeedNotFound }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <div className={classes.siteWrapper}>
      <Header userName="Maximilian" userEmail="MaximilianMaximilian@gmail.com" logOut={() => { console.log('Log out'); }} />
      {children}
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
