import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../mui/inputTheme';

function InputMasked({
  mask, maskPlaceholder, value, onChange, onBlur, id, name, type, label, helperText,
  hasError, variant, isRequired, isOptionalShowing, isDisabled, wrapperClassName,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  return (
    <ThemeProvider theme={theme}>
      <div className={wrapperClassName}>
        <InputMask
          mask={mask}
          maskPlaceholder={maskPlaceholder}
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
              variant={variant}
              fullWidth
            />
          )}
        </InputMask>
      </div>
    </ThemeProvider>
  );
}

export default memo(InputMasked);

InputMasked.defaultProps = {
  maskPlaceholder: null,
  type: 'text',
  value: '',
  helperText: '',
  isRequired: false,
  isOptionalShowing: false,
  isDisabled: false,
  hasError: false,
  variant: 'outlined',
  wrapperClassName: null,
};

InputMasked.propTypes = {
  mask: PropTypes.string.isRequired,
  maskPlaceholder: PropTypes.string,
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
  wrapperClassName: PropTypes.string,
};
