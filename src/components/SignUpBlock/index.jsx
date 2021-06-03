import React, {
  useContext, useEffect, useRef, useState, memo,
} from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useInViewport } from 'react-in-viewport';
import { Link as LinkScroll } from 'react-scroll';
import { withTranslation } from '../../../i18n';
import ContentWrapper from '../ContentWrapper';
import MyContext from '../../utils/context';
import styles from './SignUpBlock.module.scss';
import Form from './Form';
import { getPositions } from '../../../redux/actions';
import { getIsPageLoaded } from '../../../redux/reducers/ui';
import { selectPositionsError } from '../../../redux/reducers/signUp';
import SlideDown from '../Acquainted/SlideDown/SlideDown';
import ButtonComponent from '../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import styles2 from './Form/Modal.module.scss';
import Success from '../../assets/img/svg/Success.svg';
import FootPrints from '../../assets/img/svg/do-not-inline/Footprints.svg';

const SignUpBlock = ({ t }) => {
  const [isPositionFetched, setIsPositionsFetched] = useState(false);
  const signUpBlockRef = useRef();
  const dispatch = useDispatch();
  const isPageLoaded = useSelector((state) => getIsPageLoaded(state));

  const inViewport = useInViewport(signUpBlockRef, {}, {}, {});
  const titleClasses = classNames('h2', styles.title);
  const subtitleClasses = classNames('h5', styles.subtitle);
  const { isGoogleSpeedTest } = useContext(MyContext);
  const [showAfter, setShowAfter] = useState(false);
  const positionsError = useSelector((state) => selectPositionsError(state));
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
        {showAfter
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
          ) }
        <div>
          <img className={styles.footprints} src={FootPrints} alt="foot" />
        </div>
      </ContentWrapper>
    </section>
  );
};

export default memo(withTranslation('common')(SignUpBlock));
