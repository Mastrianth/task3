import React from 'react';
import TermsText from '../src/components/TermsText';

function Terms() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <TermsText />
  );
}

Terms.getInitialProps = async () => ({
  namespacesRequired: ['common', 'terms'],
});

export default Terms;
