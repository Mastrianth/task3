import React, { useState, useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { withUserAgent, useUserAgent } from 'next-useragent';
import { appWithTranslation } from '../i18n';
import loadFonts from '../src/components/utils/loadFonts';
import wrapper from '../redux/store';
import '../src/assets/scss/global.scss';
import '../src/assets/scss/typography.scss';
import routes from '../src/routing/routes';
import { getIsSideDrawerOpen } from '../redux/reducers/ui';
import { getCurrentUser } from '../redux/reducers/auth';
import CustomHead from '../src/components/CustomHead';
import Layout from '../src/components/Layout';
import MyContext from '../src/utils/context';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, ua }) {
  useEffect(() => {
    loadFonts('https://fonts.googleapis.com/css2?family=Overpass:wght@600&family=Source+Sans+Pro:wght@400;700');
  }, []);

  const router = useRouter();
  const [isGoogleSpeedTest, setGoogleSpeedTest] = useState(true);

  // useEffect(() => {
  //   setGoogleSpeedTest(/Speed/.test(ua.source) || /Lighthouse/.test(ua.source));
  // }, [ua]);

  const route = routes.find((routeObj) => routeObj.route === router.pathname);
  const is404 = !route; // false if route found, true of not
  const title = is404 ? 'Page is not found' : route.title;

  const isSideDrawerOpen = useSelector((state) => getIsSideDrawerOpen(state));
  const currentUser = useSelector((state) => getCurrentUser(state));

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <CustomHead title={title} />
      <MyContext.Provider value={{ isGoogleSpeedTest }}>
        <Layout currentUser={currentUser} isSideDrawerOpen={isSideDrawerOpen} is404={is404}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </MyContext.Provider>
      <ReactTooltip
        place="bottom"
        effect="solid"
        arrowColor="transparent"
        className="tooltip"
      />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export function getServerSideProps(context) {
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua, useragent: ua.source },
  };
}

export default wrapper.withRedux(appWithTranslation(MyApp));
