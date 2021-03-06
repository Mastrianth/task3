import React, { useState, useEffect } from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { withUserAgent, useUserAgent } from 'next-useragent';
import LazyHydrate from 'react-lazy-hydration';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';
import { appWithTranslation } from '../i18n';
import wrapper from '../redux/store';
import '../src/assets/scss/global.scss';
import '../src/assets/scss/typography.scss';
import routes from '../src/routing/routes';
import { getCurrentUser } from '../redux/reducers/auth';
import CustomHead from '../src/components/Layout/CustomHead';
import Layout from '../src/components/Layout';
import MyContext from '../src/utils/context';
import { getIsPageLoaded } from '../redux/reducers/ui';
import { checkFormFilled } from '../redux/actions';

function MyApp({ Component, pageProps, ua }) {
  const router = useRouter();
  const [isGoogleSpeedTest, setGoogleSpeedTest] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setGoogleSpeedTest(/Speed/.test(ua.source) || /Lighthouse/.test(ua.source));
  }, [ua]);

  const route = routes.find((routeObj) => routeObj.route === router.pathname);
  const is404 = !route; // false if route found, true of not
  const title = is404 ? 'Page is not found' : route.title;
  const isPageLoaded = useSelector((state) => getIsPageLoaded(state));
  const currentUser = useSelector((state) => getCurrentUser(state));

  useEffect(() => {
    if (!isGoogleSpeedTest) {
      TagManager.initialize({
        gtmId: 'GTM-W98K3L2',
      });
      ReactGA.initialize('UA-197493593-1');
    }
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const LSFormFilledCheck = localStorage.getItem('form');
    if (LSFormFilledCheck) {
      dispatch(checkFormFilled());
    }
  }, []);

  useEffect(() => {
    const GTMPageView = (url) => {
      const pageEvent = {
        event: 'pageview',
        page: url,
      };

      window && window.dataLayer && window.dataLayer.push(pageEvent);
      return pageEvent;
    };

    const handleRouteChange = (url) => GTMPageView(url);

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  if (isGoogleSpeedTest) {
    return (
      <>
        <CustomHead title={title} currentRoute={router.pathname} isGoogleSpeedTest={isGoogleSpeedTest} />
        <LazyHydrate ssrOnly>
          <MyContext.Provider value={{ isGoogleSpeedTest }}>
            <Layout currentUser={currentUser} currentRoute={router.pathname}>
              <Component {...pageProps} />
            </Layout>
          </MyContext.Provider>
        </LazyHydrate>
      </>
    );
  }
  return (
    <>
      <CustomHead title={title} currentRoute={router.pathname} />
      <MyContext.Provider value={{ isGoogleSpeedTest }}>
        <Layout
          currentUser={currentUser}
          isPageLoaded={isPageLoaded}
        >
          <Component
            {...pageProps}
            isPageLoaded={isPageLoaded}
          />
        </Layout>
        {!isGoogleSpeedTest ? (
          <ReactTooltip
            place="bottom"
            effect="solid"
            arrowColor="transparent"
            className="tooltip"
            overridePosition={({ top, left }, _currentEvent, currentTarget, refNode) => {
              const { align } = currentTarget.dataset;
              const closestTooltipContainer = currentTarget.closest('.tooltip-container');

              // if no "tooltip-container" found in parent elements, fall back to default coords
              if (!closestTooltipContainer) {
                return { top, left };
              }

              const containerRect = closestTooltipContainer.getBoundingClientRect();

              // if align left specified, align left edges of tooltip and container
              if (align && align === 'left') {
                return { top, left: containerRect.left };
              }

              // if align left NOT specified, align right edges of tooltip and container
              return {
                top,
                left: containerRect.right - refNode.offsetWidth,
              };
            }}
          />
        ) : null}
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
