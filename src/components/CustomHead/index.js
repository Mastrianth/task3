import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import favIcon from '../../../public/assets/favicon.png';
import MyContext from '../../utils/context';

const { isGoogleSpeedTest } = useContext(MyContext);

const CustomHead = ({ title }) => {
  const titleBase = 'Test assignment for Frontend Developer position';
  const displayTitle = title ? `${title} | ${titleBase}` : titleBase;

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Head>
      <title>{displayTitle}</title>
      <meta
        name="description"
        content="We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"
      />
      <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
      <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {!isGoogleSpeedTest ? null : (
        <link
          rel="preload"
          as="image"
          href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-2x-1cd3a846fcb64971da37100438adff5b.webp"
        />
      )}
      {!isGoogleSpeedTest ? null : (
        <link
          rel="preload"
          as="image"
          href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-2x-1cd3a846fcb64971da37100438adff5b.jpg"
        />
      )}
      {!isGoogleSpeedTest ? null : (
        <link
          rel="preload"
          as="image"
          href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-reg-360-2b8668deae9690115bd6cd3c8b656913.jpg"
        />
      )}
      {!isGoogleSpeedTest ? null : (
        <link
          rel="preload"
          as="image"
          href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-reg-360-2b8668deae9690115bd6cd3c8b656913.webp"
        />
      )}
      <meta name="robots" content="noindex, nofollow" />
      <script dangerouslySetInnerHTML={{
        __html: `
            function canUseWebP() {
              var elem = document.createElement('canvas');
              if (!!(elem.getContext && elem.getContext('2d'))) {
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
              } else {
                return false;
              }
            }
            if(canUseWebP()) {
              document.documentElement.classList.add('webp');
            }
          `,
      }}
      />
    </Head>
  );
};

CustomHead.defaultProps = {
  title: null,
};

CustomHead.propTypes = {
  title: PropTypes.string,
};

export default CustomHead;
