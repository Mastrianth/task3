import React from "react";

import TableMenuUnAuth from "./TableMenuUnAuth";

export default {
  title: "TableMenu/TableMenu2",
  component: TableMenuUnAuth,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TableMenuUnAuth {...args} />;

export const TableMenu2 = Template.bind({});
TableMenu2.args = {
  cls: "mobileMenu",
  fontWeight: 400,
  backgroundColor: "#fff",
  fontSize: "16px",
  fontFamily: "Source Sans Pro",
};
