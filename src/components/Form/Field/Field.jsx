import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

const Input = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  helperText,
  isDisabled,
  hasError,
  variant,
  margin,
  isFullWidth,
  maxLength,
}) => (
  <TextField
    id={id}
    name={name}
    type={type}
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    disabled={isDisabled}
    error={hasError}
    variant={variant}
    margin={margin}
    fullWidth={isFullWidth}
    inputProps={{
      maxLength,
    }}
  >
    {children}
  </TextField>
);

export default memo(Input);

Input.defaultProps = {
  type: 'text',
  value: '',
  helperText: '',
  isDisabled: false,
  hasError: false,
  variant: null,
  isFullWidth: false,
  maxLength: null,
  margin: null,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.string,
  margin: PropTypes.string,
  isFullWidth: PropTypes.bool,
  maxLength: PropTypes.string,
};
