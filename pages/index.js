import React, { useContext } from 'react';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';
import LazyHydrate from 'react-lazy-hydration';
import Banner from '../src/components/Banner';
import Relationships from '../src/components/Relationship';
import Acquainted from '../src/components/Acquainted/Acquainted';
import Users from '../src/components/Users';
import mainBg360Webp from '../src/assets/img/banner/banner-background-360-2x.webp';
import MyContext from '../src/utils/context';

function Index() {
  const { isGoogleSpeedTest } = useContext(MyContext);
  if (!isGoogleSpeedTest) {
    return (
      <>
        <Head>
          <title>HomePage - Task 3.1 Frontend Trainee Program</title>
          <meta name="title" content="HomePage - Task 3.1 Frontend Trainee Program" />
          <meta name="description" content="Home page - Test task 3 description for crawlers and scrapers" />
          <link rel="preload" as="image" href={mainBg360Webp} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
          <meta property="og:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
          <meta property="og:description" content="Home page - Test task 3 description for crawlers and scrapers" />
          <meta property="og:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-background-768.jpg" />
          <meta property="og:image:width" content="1150" />
          <meta property="og:image:height" content="760" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
          <meta property="twitter:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
          <meta property="twitter:description" content="Home page - Test task 3 description for crawlers and scrapers" />
          <meta property="twitter:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-background-768.jpg" />
        </Head>
        <div>
          <Banner />
          <Acquainted />
          <Relationships />
          <LazyLoad once>
            <Users />
          </LazyLoad>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>HomePage - Task 3.1 Frontend Trainee Program</title>
        <meta name="title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta name="description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <link rel="preload" as="image" href={mainBg360Webp} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
        <meta property="og:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="og:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="og:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-background-768.jpg" />
        <meta property="og:image:width" content="1150" />
        <meta property="og:image:height" content="760" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
        <meta property="twitter:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="twitter:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="twitter:image" content="https://test2021-frontend-nick-k-task3.abzdev2.com/banner-background-768.jpg" />
      </Head>
      <div>
        <LazyHydrate ssrOnly>
          <Banner />
          <Acquainted />
          <Relationships />
          <Users />
        </LazyHydrate>
      </div>
    </>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms', 'webdevelopment'],
});

export default Index;
