import React from 'react';

import Footer from './Footer';

export default {
  title: 'Footer/Footer1',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Footer {...args} />;

export const Footer1 = Template.bind({});
Footer1.args = {
  cls: 'footer',
  fontWeight: 400,
  backgroundColor: '#fff',
  fontSize: '16px',
  fontFamily: 'Source Sans Pro',
};
