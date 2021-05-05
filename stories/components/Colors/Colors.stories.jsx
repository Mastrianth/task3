import React from "react";
import Colors from "./Colors";

export default {
  title: "Colors",
  component: Colors,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "background",
          "gray",
          "black87",
          "true",
          "light_gray",
          "hover",
          "hover_blue",
          "links",
        ],
      },
    },
  },
};

const Template = (args) => {
  const { color } = args;

  return <Colors color={color} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: "tertiary",
};

export const Background = Template.bind({});
Background.args = {
  color: "background",
};

export const Gray = Template.bind({});
Gray.args = {
  color: "gray",
};

export const Black87 = Template.bind({});
Black87.args = {
  color: "black87",
};

export const True = Template.bind({});
True.args = {
  color: "true",
};

export const Light_gray = Template.bind({});
Light_gray.args = {
  color: "light_gray",
};

export const Hover = Template.bind({});
Hover.args = {
  color: "hover",
};

export const Hover_blue = Template.bind({});
Hover_blue.args = {
  color: "hover_blue",
};

export const Links = Template.bind({});
Links.args = {
  color: "links",
};
