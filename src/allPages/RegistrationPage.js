import React, { useCallback, useEffect } from 'react';
import Header from '../components/HeaderUnAuth/Header';
import BannerRegistration from '../components/BannerRegistration/BannerRegistration';
import loadFonts from '../utils/loadFonts';
import SignUp from '../components/Form/SignUp';

const RegistrationPage = () => {
  const loadFontsCallback = useCallback(loadFonts, []);
  useEffect(
    () => loadFontsCallback(
      'https://fonts.googleapis.com/css2?family=Asap:wght@400;700&family=Nunito:wght@300;400;700&display=swap',
    ),
    [loadFonts],
  );
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header />
      <BannerRegistration />
      <SignUp />
    </>
  );
};

export default RegistrationPage;
