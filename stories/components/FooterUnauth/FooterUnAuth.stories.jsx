import React from "react";
import FooterUnAuth from "./FooterUnAuth";

export default {
  title: "Footer/Footer2",
  component: FooterUnAuth,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <FooterUnAuth {...args} />;

export const Footer2 = Template.bind({});
Footer2.args = {
  cls: "footer",
  fontWeight: 400,
  backgroundColor: "#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
