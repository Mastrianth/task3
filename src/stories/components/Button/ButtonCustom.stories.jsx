import React from 'react';
import ButtonCustom from './ButtonCustom';

export default {
  title: 'Button',
  component: ButtonCustom,
  parameters: {
    actions: {
      handles: ['clicks'],
    },
  },
  argTypes: {
    onClick: {
      actions: 'clicked',
    },
    type: {
      table: {
        disabled: true,
      },
    },
  },
};

const Template = (args) => {
  const { type, disabled, text } = args;

  return <ButtonCustom type={type} disabled={disabled} text={text} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  text: 'Secondary',
};

export const Primary_small = Template.bind({});
Primary_small.args = {
  type: 'primary_small',
  text: 'Small',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined',
  text: 'Outlined',
};

export const Outlined_white = Template.bind({});
Outlined_white.args = {
  type: 'outlined-white',
  text: 'White',
};
