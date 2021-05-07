import React, { useState, useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { withUserAgent, useUserAgent } from 'next-useragent';
import LazyHydrate from 'react-lazy-hydration';
import PropTypes from 'prop-types';
import { appWithTranslation } from '../i18n';
import wrapper from '../redux/store';
import '../src/assets/scss/global.scss';
import '../src/assets/scss/typography.scss';
import routes from '../src/routing/routes';
import { getCurrentUser } from '../redux/reducers/auth';
import CustomHead from '../src/components/CustomHead';
import Layout from '../src/components/Layout';
import MyContext from '../src/utils/context';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, ua }) {
  const router = useRouter();
  const [isGoogleSpeedTest, setGoogleSpeedTest] = useState(true);

  useEffect(() => {
    setGoogleSpeedTest(/Speed/.test(ua.source) || /Lighthouse/.test(ua.source));
  }, [ua]);

  const route = routes.find((routeObj) => routeObj.route === router.pathname);
  const is404 = !route; // false if route found, true of not
  const title = is404 ? 'Page is not found' : route.title;

  const currentUser = useSelector((state) => getCurrentUser(state));

  if (isGoogleSpeedTest) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <CustomHead title={title} />
        <LazyHydrate ssrOnly>
          <MyContext.Provider value={{ isGoogleSpeedTest }}>
            <Layout currentUser={currentUser}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...pageProps} />
            </Layout>
          </MyContext.Provider>
        </LazyHydrate>
      </>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <CustomHead title={title} />
        <MyContext.Provider value={{ isGoogleSpeedTest }}>
          <Layout currentUser={currentUser}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </MyContext.Provider>
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

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  ua: PropTypes.object,
};

export default wrapper.withRedux(appWithTranslation(withUserAgent(MyApp)));
