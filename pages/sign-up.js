import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import SignUpBanner from '../src/components/SignUpBanner';

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
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <SignUpBanner />
      <SignUpBlock />
    </>
  );
}

SignUp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default SignUp;
