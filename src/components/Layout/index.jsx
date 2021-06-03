import React, {
  memo, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Header from '../Header';
import classes from './Layout.module.scss';
import { withTranslation } from '../../../i18n';
import MyContext from '../../utils/context';
import {
  fetchCurrentUser, openSideDrawer, setFormUnFilled,
} from '../../../redux/actions';

const Footer = dynamic(() => import('../Footer'),
  { ssr: false });

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Layout = ({
  children, currentUser, isPageLoaded, isSideDrawerOpen, t,
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [urlToGo, setUrlToGo] = React.useState(null);
  const router = useRouter();
  function openModal(e) {
    setIsOpen(true);
    let linkTarget = e.nativeEvent.target;
    if (e.target.tagName === 'IMG') {
      linkTarget = e.nativeEvent.target.parentNode;
    }
    setUrlToGo(linkTarget.href);
    e.preventDefault();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalAndGotoUrl() {
    setIsOpen(false);
    if (urlToGo.includes('#')) {
      router.push(urlToGo);
    } else {
      router.push(urlToGo).then(() => window.scrollTo(0, 0));
    }
    setUrlToGo(null);
    dispatch(setFormUnFilled());
    localStorage.removeItem('form');
    localStorage.removeItem('counter');
  }

  Modal.setAppElement('#__next');

  const {
    name, email, avatarSrc, isLoaded: isUserLoaded, showButton,
  } = currentUser;

  const siteWrapperClasses = classNames('main-content', classes.siteWrapper);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className={siteWrapperClasses}>
        {isGoogleSpeedTest ? null
          : (
            <Modal
              overlayClassName={classes.modalOverlay}
              className={classes.modalWindow}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className={classes.modalTitle}>{t('modal-title')}</div>
              <div className={classes.modalSubtitle}>{t('modal-subtitle')}</div>
              <div className={classes.modalLinksContainer}>
                <button className={classes.modalLink} onClick={closeModal}>{t('Stay on page')}</button>
                <button className={classes.modalLink} onClick={closeModalAndGotoUrl}>{t('Leave page')}</button>
              </div>
            </Modal>
          )}
        <Header
          userName={name}
          userEmail={email}
          userAvatar={avatarSrc}
          isUserLoaded={isUserLoaded}
          showButton={showButton}
          isDesktop={!isGoogleSpeedTest && isHeaderDesktop}
          openModal={openModal}
          openSideDrawer={() => {
            dispatch(openSideDrawer());

            if (!userFetched) {
              dispatch(fetchCurrentUser(1));
              setUserFetched(true);
            }
          }}
          logOut={(name, email, avatarSrc, isLoaded) => {
            name = '', email = '';
          }}
        />
        {children}
        {isGoogleSpeedTest ? null : <Footer openModal={openModal} />}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(withTranslation(['common'])(Layout));
