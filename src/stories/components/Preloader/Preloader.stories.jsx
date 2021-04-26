import React from 'react';

import { Preloader } from './Preloader';

export default {
  title: 'Preloader/Preloader1',
  component: Preloader,
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
    <Preloader {...args} />
  </div>
);

export const PreloaderComponent = Template.bind({});
PreloaderComponent.args = {};
