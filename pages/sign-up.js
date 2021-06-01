import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';
import LazyHydrate from 'react-lazy-hydration';
import SignUpBanner from '../src/components/SignUpBanner';
import SignUpBlock from '../src/components/SignUpBlock';
import regBg360Webp from '../src/assets/img/banner-reg/banner-reg-360-2x.webp';
import MyContext from '../src/utils/context';

function SignUp() {
  const { isGoogleSpeedTest } = useContext(MyContext);
  useEffect(() => {
    const hash = window.location.href.split('#')[1];
    if (hash) {
      const anchor = document.getElementsByName(hash);
      if (anchor.length > 0) {
        const offSet = anchor[0].offsetTop - 20;
        window.scrollTo(0, offSet);
      }
      history.pushState('', document.title, window.location.pathname
        + window.location.search);
    }
  }, []);
  if (!isGoogleSpeedTest) {
    return (
      <>
        <Head>
          <title>Registration - Task 3.1 Frontend Trainee Program</title>
          <meta name="title" content="Registration - Task 3.1 Frontend Trainee Program" />
          <link rel="preload" as="image" href={regBg360Webp} />
          <meta name="description" content="Registration - Test task 3 description for crawlers and scrapers" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
          <meta property="og:title" content="Registration - Task 3.1 Frontend Trainee Program" />
          <meta property="og:description" content="Registration - Test task 3 description for crawlers and scrapers" />
          <meta property="og:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-reg-768.jpg" />
          <meta property="og:image:width" content="1150" />
          <meta property="og:image:height" content="760" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
          <meta property="twitter:title" content="Registration - Task 3.1 Frontend Trainee Program" />
          <meta property="twitter:description" content="Registration - Test task 3 description for crawlers and scrapers" />
          <meta property="twitter:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-reg-768.jpg" />
        </Head>
        <div>
          <SignUpBanner />
          <SignUpBlock />
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Registration - Task 3.1 Frontend Trainee Program</title>
        <meta name="title" content="Registration - Task 3.1 Frontend Trainee Program" />
        <link rel="preload" as="image" href={regBg360Webp} />
        <meta name="description" content="Registration - Test task 3 description for crawlers and scrapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
        <meta property="og:title" content="Registration - Task 3.1 Frontend Trainee Program" />
        <meta property="og:description" content="Registration - Test task 3 description for crawlers and scrapers" />
        <meta property="og:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-reg-768.jpg" />
        <meta property="og:image:width" content="1150" />
        <meta property="og:image:height" content="760" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
        <meta property="twitter:title" content="Registration - Task 3.1 Frontend Trainee Program" />
        <meta property="twitter:description" content="Registration - Test task 3 description for crawlers and scrapers" />
        <meta property="twitter:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-reg-768.jpg" />
      </Head>
      <div>
        <LazyHydrate ssrOnly>
          <SignUpBanner />
          <SignUpBlock />
        </LazyHydrate>
      </div>
    </>
  );
}

SignUp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default SignUp;
