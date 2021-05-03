import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import favIcon from '../../../public/assets/favicon.png';

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
      <link rel="icon" href={favIcon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
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
