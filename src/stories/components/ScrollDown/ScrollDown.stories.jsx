import React from 'react';
import ScrollDown from './ScrollDown';

export default {
  title: 'ScrollDown/ScrollDown1',
  component: ScrollDown,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <div style={{ padding: '10px' }}>
    <ScrollDown {...args} />
  </div>
);

export const ScrollDownComponent = Template.bind({});
ScrollDownComponent.args = {};
