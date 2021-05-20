import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SignUpBanner from '../src/components/SignUpBanner';
import socialImg from '../src/assets/img/banner-reg/banner-reg-360.webp';

const SignUpBlock = dynamic(() => import('../src/components/SignUpBlock'),
  { ssr: false });

function SignUp() {
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
  return (
    <>
      <Head>
        <title>Registration - Task 3.1 Frontend Trainee Program</title>
        <meta name="title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-2x-1cd3a846fcb64971da37100438adff5b.webp" />
        <meta name="description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
        <meta property="og:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="og:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="og:image" content={`https://test2021-frontend-nick-k-task3-static.abzdev2.com/${socialImg}`} />
        <meta property="og:image:width" content="1150" />
        <meta property="og:image:height" content="760" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/sign-up" />
        <meta property="twitter:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="twitter:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="twitter:image" content={`https://test2021-frontend-nick-k-task3-static.abzdev2.com/${socialImg}`} />
      </Head>
      <div>
        <SignUpBanner />
        <SignUpBlock />
      </div>
    </>
  );
}

SignUp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default SignUp;
