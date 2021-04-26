import React from 'react';

import Links from './Links';

export default {
  title: 'Links/Links1',
  component: Links,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Links {...args} />;

export const Links1 = Template.bind({});
Links1.args = {
  cls: 'Links',
  fontWeight: 400,
  backgroundColor: '#fff',
  fontSize: '16px',
  fontFamily: 'Source Sans Pro',
};
