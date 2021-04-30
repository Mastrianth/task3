import React from 'react';
import Banner from '../src/components/Banner';
import AboutMe from '../src/components/Acquainted/Acquainted';
import Relationships from '../src/components/Relationship';
import Users from '../src/components/Users';

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

export default Index;
