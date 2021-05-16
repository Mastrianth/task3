import React from 'react';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import Banner from '../src/components/Banner';

const AboutMe = dynamic(() => import('../src/components/Acquainted/Acquainted'),
  { ssr: false });
const Relationships = dynamic(() => import('../src/components/Relationship'),
  { ssr: false });
const Users = dynamic(() => import('../src/components/Users'),
  { ssr: false });

function Index() {
  return (
    <>
      <Banner />
      <LazyLoad once>
      <AboutMe />
    </LazyLoad>
      <LazyLoad once>
        <Relationships />
      </LazyLoad>
      <LazyLoad once>
      <Users />
      </LazyLoad>
    </>
  );
}
Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms', 'webdevelopment'],
});

export default Index;
