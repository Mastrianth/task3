import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useInViewport } from 'react-in-viewport';
import { withTranslation } from '../../../i18n';
import ContentWrapper from '../ContentWrapper';
import MyContext from '../../utils/context';
import styles from './SignUpBlock.module.scss';
import Form from '../Form';
import { getPositions, hideSuccessPopup } from '../../../redux/actions';
import { getIsPageLoaded, getIsSuccessPopupActive } from '../../../redux/reducers/ui';
import { getIsSignUpActive } from '../../../redux/reducers/signUp';

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

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  useEffect(() => {
    if (isPageLoaded && inViewport && !isPositionFetched) {
      dispatch(getPositions());
      setIsPositionsFetched(true);
    }
  }, [isPageLoaded, inViewport]);

  // if (!isSignUpActive) {
  //   return null;
  // }

  return (
    <section ref={signUpBlockRef} className={styles.SignUpBlock} id="sign-up">
      <ContentWrapper>
        <h2 className={titleClasses}>{t('reg-form-title')}</h2>
        <h3 className={subtitleClasses}>
          {t(
            'reg-form-subtitle',
          )}
        </h3>
        {isGoogleSpeedTest ? null : <Form t={t} />}
      </ContentWrapper>
    </section>
  );
};

export default withTranslation('common')(SignUpBlock);
