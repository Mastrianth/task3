import React from 'react';

import { ButtonComponent } from './ButtonCustom';

export default {
  title: 'Buttons',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'contained',
  label:'Large',
  color: 'primary',
  disabled:false,
  backgroundColor:"#fff",
  size:"large"
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: 'contained',
  label:'Small',
  color: 'primary',
  disabled:false,
  backgroundColor:"#fff",
  size:"small"
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: 'contained',
  label:'Large',
  color: 'secondary',
  disabled:false,
  backgroundColor:"#fff",
  size:"large"
};

export const SmallOutline = Template.bind({});
SmallOutline.args = {
  variant: "outlined",
  label: 'Normal',
  color: 'secondary',
  disabled:false,
  backgroundColor:"#EA5924",
};

export const SmallOutlineWhite = Template.bind({});
SmallOutlineWhite.args = {
  variant: "outlined",
  label: 'Normal',
  color: '333',
  disabled:false,
};
