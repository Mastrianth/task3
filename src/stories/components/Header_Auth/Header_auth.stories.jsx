import React from 'react';

import { Menu2 } from './Menu2';

export default {
  title: 'Menu/Menu2',
  component: Menu2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <div style={{padding:"10px"}}><Menu2 {...args} /></div>;

export const MenuAuthorized = Template.bind({});
MenuAuthorized.args = {
  cls: "menu",
  fontWeight: 400,
  backgroundColor:"#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
