import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { TextField } from '@material-ui/core';

const MaskedInput = ({
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
  mask,
}) => (
  <InputMask
    mask={mask}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    disabled={isDisabled}
  >
    {() => (
      <TextField
        id={id}
        name={name}
        type={type}
        label={label}
        helperText={helperText}
        error={hasError}
        variant={variant}
        margin={margin}
        fullWidth={isFullWidth}
      >
        {children}
      </TextField>
    )}
  </InputMask>
);

export default memo(MaskedInput);

MaskedInput.defaultProps = {
  type: 'text',
  value: '',
  helperText: '',
  isDisabled: false,
  hasError: false,
  variant: null,
  isFullWidth: false,
  margin: null,
};

MaskedInput.propTypes = {
  mask: PropTypes.string.isRequired,
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
};
