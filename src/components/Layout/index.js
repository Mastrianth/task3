import React, { memo, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import classes from './Layout.module.scss';
import MyContext from '../../utils/context';
import {
  fetchCurrentUser, openSideDrawer
} from "../../../redux/actions";

const Footer = dynamic(() => import('../Footer'),
  { ssr: false });
const Layout = ({
  children, currentUser, isPageLoaded, isSideDrawerOpen,
}) => {
  const { isGoogleSpeedTest } = useContext(MyContext);
  const [isHeaderDesktop, setIsHeaderDesktop] = useState(false);
  const [isFooterDesktop, setIsFooterDesktop] = useState(false);
  const [userFetched, setUserFetched] = useState(false);

  const dispatch = useDispatch();

  const checkIfFooterAndHeaderDesktop = () => {
    if (window.matchMedia('(min-width: 900px)').matches) {
      setIsHeaderDesktop(true);
    }
    if (window.matchMedia('(min-width: 700px)').matches) {
      setIsFooterDesktop(true);
    }
  };

  useEffect(() => {
      dispatch(fetchCurrentUser(1));
      setUserFetched(true);
  }, []);

  const {
    name, email, avatarSrc, isLoaded: isUserLoaded,
  } = currentUser;

  const siteWrapperClasses = classNames('main-content', classes.siteWrapper);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className={classes.siteWrapper}>
        <Header
          userName={name}
          userEmail={email}
          userAvatar={avatarSrc}
          isUserLoaded={isUserLoaded}
          isDesktop={!isGoogleSpeedTest && isHeaderDesktop}
          openSideDrawer={() => {
            dispatch(openSideDrawer());

            if (!userFetched) {
              dispatch(fetchCurrentUser(1));
              setUserFetched(true);
            }
          }}
          logOut={() => {
            console.log('Log out');
          }}
        />
        {children}
          {isGoogleSpeedTest ? null : <Footer />}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Layout);
