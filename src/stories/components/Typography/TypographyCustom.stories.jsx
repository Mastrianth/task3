import React from 'react';
import TypographyCustom from './TypographyCustom';

export default {
  title: 'Typography',
  component: TypographyCustom,
  argTypes: {
    variant: {
      controls: {
        type: 'select',
        options: ['h1', 'h2', 'h2-mobile', 'h3'],
      },
    },
    component: {
      control: {
        type: 'select',
        options: ['', 'p'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['1', '2', '3', '4', '5'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'inherit'],
      },
    },
  },
};

const Template = (args) => {
  const {
    text, variant, align, component, type,
  } = args;
  return (
    <TypographyCustom
      text={text}
      variant={variant}
      align={align}
      component={component}
      type={type}
    />
  );
};

export const Heading = Template.bind({});
Heading.args = {
  variant: 'h1',
  align: 'center',
  text: 'The five boxing wizards jump quickly.',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  align: 'center',
  text: 'The five boxing wizards jump quickly.',
  component: 'p',
  type: '1',
};
