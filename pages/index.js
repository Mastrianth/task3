import React from 'react';
import dynamic from 'next/dynamic';
import Banner from '../src/components/Banner';
import Relationships from '../src/components/Relationship';
import Users from '../src/components/Users';

const AboutMe = dynamic(() => import('../src/components/Acquainted/Acquainted'));

function Index() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Banner />
      <AboutMe />
      <Relationships />
      <Users />
    </>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms', 'webdevelopment'],
});

export default Index;
