import React from 'react';
import File from './File';

export default {
  title: 'Upload',
  component: File,
  decorators: [(Story) =>
    // <ThemeProvider theme={muiTheme}>
    <Story/>
    // </ThemeProvider>
  ]

};

const Template = (args) => {
  return (
    <div>
      <File {...args}/>
    </div>);
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  disabled: false
};

export const FileUploadError = Template.bind({});
FileUploadError.args = {
  error: "Helper text",
};

export const FileUploadDisabled = Template.bind({});
FileUploadDisabled.args = {
  disabled: true
};

