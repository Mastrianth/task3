import React from "react";

import MobileHeader from "./MobileHeader";

export default {
  title: "MobileHeader/MobileHeader1",
  component: MobileHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ padding: "10px" }}>
    <MobileHeader {...args} />
  </div>
);

export const MobileHeader1 = Template.bind({});
MobileHeader1.args = {
  cls: "MobileHeader",
  fontWeight: 400,
  backgroundColor: "#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
