import React from 'react';
import Head from 'next/head';
import TermsText from '../src/components/TermsText';
import socialImg from '../src/assets/img/banner/banner-background-360.webp';

function Terms() {
  return (
    <>
      <Head>
        <title>Terms - Task 3.1 Frontend Trainee Program</title>
        <meta name="title" content="Terms - Task 3.1 Frontend Trainee Program" />
        <meta name="description" content="Terms - Test task 3 description for crawlers and scrapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/terms" />
        <meta property="og:title" content="Terms - Task 3.1 Frontend Trainee Program" />
        <meta property="og:description" content="Terms - Test task 3 description for crawlers and scrapers" />
        <meta property="og:image" content={`https://test2021oleh-a.abzdev2.com${socialImg}`} />
        <meta property="og:image:width" content="1150" />
        <meta property="og:image:height" content="760" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://test2021-frontend-nick-k-task3.abzdev2.com/terms" />
        <meta property="twitter:title" content="Terms - Task 3.1 Frontend Trainee Program" />
        <meta property="twitter:description" content="Terms - Test task 3 description for crawlers and scrapers" />
        <meta property="twitter:image" content={`https://test2021oleh-a.abzdev2.com${socialImg}`} />
      </Head>
      <div>
        <TermsText />
      </div>
    </>
  );
}

Terms.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms'],
});

export default Terms;
