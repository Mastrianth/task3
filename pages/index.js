import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import Banner from '../src/components/Banner';
// import Relationships from '../src/components/Relationship';
// import Acquainted from '../src/components/Acquainted/Acquainted';
import Users from '../src/components/Users';
import socialImg from '../src/assets/img/banner/banner-background-360.webp';

const Acquainted = dynamic(() => import('../src/components/Acquainted/Acquainted'),
  { ssr: false });
const Relationships = dynamic(() => import('../src/components/Relationship'),
  { ssr: false });
// const Users = dynamic(() => import('../src/components/Users'),
//   { ssr: false });

function Index() {
  return (
    <>
      <Head>
        <title>HomePage - Task 3.1 Frontend Trainee Program</title>
        <meta name="title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta name="description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <link rel="preload" as="image" href="https://test2021-frontend-nick-k-task3-static.abzdev2.com/_next/static/images/banner-background-360-8f654c8bf4081215ee400ec035d6238a.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
        <meta property="og:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="og:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="og:image" content={`https://test2021-frontend-nick-k-task3-static.abzdev2.com/${socialImg}`} />
        <meta property="og:image:width" content="1150" />
        <meta property="og:image:height" content="760" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/" />
        <meta property="twitter:title" content="HomePage - Task 3.1 Frontend Trainee Program" />
        <meta property="twitter:description" content="Home page - Test task 3 description for crawlers and scrapers" />
        <meta property="twitter:image" content={`https://test2021-frontend-nick-k-task3-static.abzdev2.com/${socialImg}`} />
      </Head>
      <div>
        <Banner />
        <LazyLoad once>
          <Acquainted />
        </LazyLoad>
        <LazyLoad once>
          <Relationships />
        </LazyLoad>
        <LazyLoad once>
          <Users />
        </LazyLoad>
      </div>
    </>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms', 'webdevelopment'],
});

export default Index;
