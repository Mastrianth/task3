import React from 'react';

import TableMenu from './TableMenu';

export default {
  title: 'TableMenu/TableMenu1',
  component: TableMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TableMenu {...args} />;

export const TableMenu1 = Template.bind({});
TableMenu1.args = {
  cls: 'mobileMenu',
  fontWeight: 400,
  backgroundColor: '#fff',
  fontSize: '16px',
  fontFamily: 'Source Sans Pro',
};
