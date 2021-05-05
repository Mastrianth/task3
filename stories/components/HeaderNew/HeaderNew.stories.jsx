import React from "react";
import Header from "./Header";

export default {
  title: "Header/Header1",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Header {...args} />;

export const Header1 = Template.bind({});
Header1.args = {
  cls: "header",
  fontWeight: 400,
  backgroundColor: "#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
