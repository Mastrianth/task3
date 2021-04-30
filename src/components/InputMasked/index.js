import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../mui/inputTheme';

function InputMasked({
  mask, value, onChange, onBlur, id, name, type, label, helperText,
  hasError, margin, variant, isRequired, isOptionalShowing, isDisabled, isFullWidth,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={theme}>
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
            label={`${label}${isRequired ? requiredMessage : optionalMessage}`}
            helperText={helperText}
            error={hasError}
            margin={margin}
            variant={variant}
            fullWidth={isFullWidth}
          />
        )}
      </InputMask>
    </ThemeProvider>
  );
}

export default memo(InputMasked);

InputMasked.defaultProps = {
  type: 'text',
  value: '',
  helperText: '',
  isRequired: false,
  isOptionalShowing: false,
  isDisabled: false,
  hasError: false,
  variant: null,
  margin: null,
  isFullWidth: false,
};

InputMasked.propTypes = {
  mask: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  isRequired: PropTypes.bool,
  isOptionalShowing: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.string,
  margin: PropTypes.string,
  isFullWidth: PropTypes.bool,
};
