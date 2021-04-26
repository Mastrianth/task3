import React from "react";

import { Menu } from "./Menu";

export default {
  title: "Menu/Menu1",
  component: Menu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ padding: "10px" }}>
    <Menu {...args} />
  </div>
);

export const Menu1 = Template.bind({});
Menu1.args = {
  cls: "menu",
  fontWeight: 400,
  backgroundColor: "#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
