import React from 'react';
import HeaderAuth from "./HeaderAuth";


export default {
  title: 'Header/Header2',
  component: HeaderAuth,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <HeaderAuth {...args} />;

export const Header2 = Template.bind({});
Header2.args = {
  cls: "header",
  fontWeight: 400,
  backgroundColor:"#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
