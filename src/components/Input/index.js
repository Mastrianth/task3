import { memo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../mui/inputTheme';

function Input({
  id, name, type, label, value, onChange, onBlur,
  helperText, isRequired, isOptionalShowing, isDisabled,
  hasError, variant, margin, isFullWidth, isMultiline, maxLength,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id={id}
        name={name}
        type={type}
        label={`${label}${isRequired ? requiredMessage : optionalMessage}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        disabled={isDisabled}
        error={hasError}
        variant={variant}
        margin={margin}
        fullWidth={isFullWidth}
        multiline={isMultiline}
        inputProps={{
          maxLength,
        }}
      />
    </ThemeProvider>
  );
}

export default memo(Input);

Input.defaultProps = {
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
  isMultiline: false,
  maxLength: null,
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
  isRequired: PropTypes.bool,
  isOptionalShowing: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.string,
  margin: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isMultiline: PropTypes.bool,
  maxLength: PropTypes.string,
};
