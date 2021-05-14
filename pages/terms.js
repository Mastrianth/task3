import React from 'react';
import TermsText from '../src/components/TermsText';

function Terms() {
  return (
    <TermsText />
  );
}

Terms.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms'],
});

export default Terms;
