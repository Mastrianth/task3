import React, {
  useContext, useEffect, useRef, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useInViewport } from 'react-in-viewport';
import { Link as LinkScroll } from 'react-scroll';
import AriaModal from 'react-aria-modal';
import { withTranslation } from '../../../i18n';
import ContentWrapper from '../ContentWrapper';
import MyContext from '../../utils/context';
import styles from './SignUpBlock.module.scss';
import Form from '../Form';
import { getPositions, hideSuccessPopup, showSuccessPopup } from '../../../redux/actions';
import { getIsPageLoaded, getIsSuccessPopupActive } from '../../../redux/reducers/ui';
import { getIsSignUpActive } from '../../../redux/reducers/signUp';
import SlideDown from '../Acquainted/SlideDown/SlideDown';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';
import styles2 from '../Form/Modal.module.scss';
import Success from '../../assets/img/svg/Success.svg';
import { selectPositionsError } from '../../utils/usersSlice';
import ModalContent from '../ModalContent';

const SignUpBlock = ({ t }) => {
  const [isPositionFetched, setIsPositionsFetched] = useState(false);
  const signUpBlockRef = useRef();
  const dispatch = useDispatch();
  const isPageLoaded = useSelector((state) => getIsPageLoaded(state));
  const isSignUpActive = useSelector((state) => getIsSignUpActive(state));
  const isSuccessPopupActive = useSelector((state) => getIsSuccessPopupActive(state));
  const inViewport = useInViewport(signUpBlockRef, {}, {}, {});
  const titleClasses = classNames('h2', styles.title);
  const subtitleClasses = classNames('h5', styles.subtitle);
  const { isGoogleSpeedTest } = useContext(MyContext);
  const positionsError = useSelector(selectPositionsError);
  const [showAfter, setShowAfter] = useState(false);
  const router = useRouter();
  useEffect(() => {
    dispatch(getPositions());
  }, []);

  useEffect(() => {
    if (isPageLoaded && inViewport && !isPositionFetched) {
      dispatch(getPositions());
      setIsPositionsFetched(true);
    }
  }, [isPageLoaded, inViewport]);

  const closeSuccessPopup = () => dispatch(hideSuccessPopup());
  const successPopup = isSuccessPopupActive ? (
    <AriaModal
      titleText={t('Congratulations')}
      onExit={closeSuccessPopup}
      applicationNode={document.getElementById('__next')}
      underlayColor="rgba(22, 12, 13, 0.3)"
    >
      <ModalContent
        closeModal={closeSuccessPopup}
        title={t('Congratulations')}
        text={t('You have successfully passed the registration')}
      />
    </AriaModal>
  ) : null;

  return (
    <section ref={signUpBlockRef} className={styles.SignUpBlock} id="sign-up">
      <ContentWrapper>
        <LinkScroll
          className={styles2.slideDownContainer}
          to="sign-up"
          spy
          smooth
          duration={500}
        >
          <SlideDown />
        </LinkScroll>
        <h2 className={titleClasses}>{showAfter ? t('Thank you') : t('reg-form-title')}</h2>
        <h3 className={subtitleClasses}>
          {showAfter ? t('Registration completed successfully') : t('reg-form-subtitle')}
        </h3>
        {isGoogleSpeedTest ? null : (showAfter
          ? (
            <>
              <div className={styles2.successContainer}>
                <Success />
              </div>
              <div className={styles2.successText}>
                {t('redirect')}
              </div>
              <div className={styles2.buttonContainer}>
                <ButtonComponent
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={false}
                  onClick={() => router.push('/').then(() => window.scrollTo(0, 0))}
                  label={t('Go to home')}
                />
              </div>
            </>
          )
          : (
            <div className={styles2.overlayContainer}>
              {positionsError ? (
                <div className={styles2.overlay}>
                  <div className={styles2.innerOverlayContainer}>
                    <h2 className={styles2.overlaySubtitle}>{t('reg-unavailable')}</h2>
                    <h2 className={styles2.overlaySubtitle}>{t('Please try later')}</h2>
                    <div className={styles2.buttonContainerError}>
                      <ButtonComponent
                        onClick={() => window.location.reload()}
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={false}
                        label={t('Reload this page')}
                      />
                    </div>
                  </div>
                </div>
              ) : ''}
              <Form router={router} setShowAfter={setShowAfter} t={t} />
            </div>
          ))}
      </ContentWrapper>
      {successPopup}
    </section>
  );
};

export default memo(withTranslation('common')(SignUpBlock));
