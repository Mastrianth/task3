import React from 'react';

import MobileMenuUnAuth from './MobileMenuUnAuth';

export default {
  title: 'MobileMenu/MobileMenu2',
  component: MobileMenuUnAuth,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MobileMenuUnAuth {...args} />;

export const MobileMenu2 = Template.bind({});
MobileMenu2.args = {
  cls: 'mobileMenu',
  fontWeight: 400,
  backgroundColor: '#fff',
  fontSize: '16px',
  fontFamily: 'Source Sans Pro',
};
