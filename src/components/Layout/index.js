import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import Header from '../Header';
import classes from './Layout.module.scss';
import MyContext from '../../utils/context';

const Footer = dynamic(() => import('../Footer'),
  { ssr: false });
const Layout = ({ children }) => {
  const { isGoogleSpeedTest } = useContext(MyContext);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className={classes.siteWrapper}>
        <Header
          userName="Maximilian"
          userEmail="MaximilianMaximilian@gmail.com"
          logOut={() => {
            console.log('Log out');
          }}
        />
        {children}
        <LazyLoad once>
          {isGoogleSpeedTest ? null : <Footer />}
        </LazyLoad>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
