import React from "react";
import Field from "./Field";
import MenuItemCustom from "../MenuItemCustom";

export default {
  title: "Field",
  component: Field,
  parameters: {
    actions: {
      handles: ["click", "change"],
    },
  },
  argsTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    select: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    error: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const { label, required, helperText, disabled, error, select } = args;

  return (
    <Field
      label={label}
      required={required}
      helperText={helperText}
      disabled={disabled}
      error={error}
      select={select}
      {...args}
    />
  );
};

const SelectTemplate = (args) => {
  const { label, required, helperText, disabled, error, select } = args;

  return (
    <Field
      label={label}
      required={required}
      helperText={helperText}
      disabled={disabled}
      error={error}
      select={select}
    >
      <MenuItemCustom value="First item">First item</MenuItemCustom>
      <MenuItemCustom value="Second item">Second item</MenuItemCustom>
      <MenuItemCustom value="Third item">Third item</MenuItemCustom>
    </Field>
  );
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: "Label",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: "Error",
};

export const Select = SelectTemplate.bind({});
Select.args = {
  select: true,
};
