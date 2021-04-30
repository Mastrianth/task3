import React, { useEffect, useCallback, memo } from "react";
import Header from './components/HeaderUnAuth/Header';
import Banner from './components/Banner/Banner';
import Acquainted from './components/Acquainted/Acquainted';
import Relationship from './components/Relationship/Relationship';
import loadFonts from './utils/loadFonts';
import Users from './components/OurCheerfulUser/Users';
import Footer from './components/Footer/Footer';
// import {withTranslation} from './i18n';

function App() {
  const loadFontsCallback =  useCallback(loadFonts, []);
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
      <Banner />
      <Acquainted />
      <Relationship />
      <Users />
      <Footer />
    </>
  );
}

// export default withTranslation(['webdevelopment', 'common'])(App);
export default memo(App);
