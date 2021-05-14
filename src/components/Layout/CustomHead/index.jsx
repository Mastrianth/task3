import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import favIcon from '../../../../public/assets/favicon.png';

const CustomHead = ({ title }) => {
  const titleBase = 'Test assignment for Frontend Developer position';
  const displayTitle = title ? `${title} | ${titleBase}` : titleBase;

  return (
    <Head>
      <title>{displayTitle}</title>
      <meta
        name="description"
        content="We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"
      />
      <link rel="icon" href={favIcon} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Nunito&display=swap"
      />
      <link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-2x-1cd3a846fcb64971da37100438adff5b.webp" />
      <link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-reg-768-50d406430150a82b87ee895fc7c9753b.webp" />
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