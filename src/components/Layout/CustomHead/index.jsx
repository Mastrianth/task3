import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withTranslation } from '../../../../i18n';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://test2021-frontend-nick-k-task3.abzdev2.com/',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+38 (050) 789 24 98',
      email: 'work.of.future@gmail.com',
      contactType: 'test task 3.1',
    }],
};

const CustomHead = ({
  isGoogleSpeedTest, title,
}) => {
  const titleBase = 'Test assignment for Frontend Developer position';
  const displayTitle = title ? `${title} | ${titleBase}` : titleBase;

  return (
    <Head>
      <title>{displayTitle}</title>
      <meta name="title" content={displayTitle} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {!isGoogleSpeedTest
        ? <link rel="preconnect" href="https://fonts.googleapis.com" />
        : null }
      {!isGoogleSpeedTest
        ? (
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Nunito&display=swap"
          />
        )
        : null }
      {isGoogleSpeedTest
        ? (<link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-2x-1cd3a846fcb64971da37100438adff5b.webp" />)
        : null}
      {isGoogleSpeedTest
        ? (<link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-reg-768-50d406430150a82b87ee895fc7c9753b.webp" />)
        : null}
      <meta name="robots" content="noindex, nofollow" />
      {!isGoogleSpeedTest ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      ) : null}

    </Head>
  );
};

CustomHead.defaultProps = {
  title: null,
};

CustomHead.propTypes = {
  title: PropTypes.string,
  i18nTitleId: PropTypes.string,
  currentRoute: PropTypes.string.isRequired,
};

export default withTranslation('common')(CustomHead);
