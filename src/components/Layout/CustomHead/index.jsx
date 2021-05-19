import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import favIcon from '../../../../public/assets/favicon.png';
import { INDEX, SIGN_UP, TERMS } from '../../../routing/routes';
import { withTranslation } from '../../../../i18n';
import mainBg768Webp from '../../../assets/img/banner/banner-background-360.webp';
import registerBg768Webp from '../../../assets/img/banner-reg/banner-reg-360.webp';

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
  t, currentRoute, i18nTitleId, isGoogleSpeedTest,
}) => {
  const titleBase = 'Test assignment for Frontend Developer position';
  const displayTitle = i18nTitleId ? `${t(i18nTitleId)} | ${titleBase}` : titleBase;

  let bannerBgPreload;
  let ogDescription;
  let ogImage;
  switch (currentRoute) {
    case INDEX:
      bannerBgPreload = <link rel="preload" href={mainBg768Webp} as="image" />;
      ogDescription = "Home page - Test task 3 description for crawlers and scrapers";
      ogImage = 'https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-1024-123c69e5c58fc83d5c404e10b9c3ea8f.webp';
      break;
    case SIGN_UP:
      bannerBgPreload = <link rel="preload" href={registerBg768Webp} as="image" />;
      ogDescription = "Registration - Test task 3 description for crawlers and scrapers";
      ogImage = 'https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-reg-360-78667276f4278d63ce9c000aa336e07a.webp';
      break;
    case TERMS:
      ogDescription = "Terms - Test task 3 description for crawlers and scrapers";
      ogImage = 'https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-1024-123c69e5c58fc83d5c404e10b9c3ea8f.webp';
      break;
    default:
      bannerBgPreload = null;
      ogDescription = "Home page - Test task 3 description for crawlers and scrapers";
      ogImage = 'https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-1024-123c69e5c58fc83d5c404e10b9c3ea8f.webp';
  }

  return (
    <Head>
      <title>{displayTitle}</title>
      <meta name="title" content={displayTitle} />
      <link rel="icon" href={favIcon} />
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
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website"/>
      <meta property="og:image:width" content="1150"/>
      <meta property="og:image:height" content="760"/>
      <meta property="og:url" content={`https://test2021-frontend-nick-k-task3.abzdev2.com${currentRoute}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com"/>
      <meta property="twitter:title" content="HomePage - Task 3.1 Frontend Trainee Program"/>
      <meta property="twitter:description" content="Home page - Test task 3 description for crawlers and scrapers"/>
      <meta property="twitter:image" content={"https://test2021-frontend-nick-k-task3.abzdev2.com"+mainBg768Webp}/>
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
