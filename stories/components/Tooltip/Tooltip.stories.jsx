import React from "react";

import TooltipComponent from "./Tooltip";

export default {
  title: "Tooltip/Tooltip1",
  component: TooltipComponent,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  argsTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ padding: "10px" }}>
    <TooltipComponent {...args} />
  </div>
);

export const Tooltip1 = Template.bind({});
Tooltip1.args = {
  fontWeight: "400",
  cls: "tooltip-class",
  fontSize: "14px",
  fontFamily: "'Nunito', sans-serif",
  label: "verylongtext",
  color: "#4c4b4b",
};
