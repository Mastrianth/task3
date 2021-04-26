import React from 'react';

import MobileMenu from './MobileMenu';

export default {
  title: 'MobileMenu/MobileMenu1',
  component: MobileMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MobileMenu {...args} />;

export const MobileMenu1 = Template.bind({});
MobileMenu1.args = {
  cls: 'mobileMenu',
  fontWeight: 400,
  backgroundColor: '#fff',
  fontSize: '16px',
  fontFamily: 'Source Sans Pro',
};
