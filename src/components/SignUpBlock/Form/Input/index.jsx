import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './InputForm.module.scss';

import theme from '../../../mui/inputTheme';
import { initialProps } from '../../../../utils/formHelpers';

function Input({
  id, name, type, label, value, placeholder, onChange, onBlur,
  helperText, isRequired, isOptionalShowing, isDisabled,
  hasError, variant, isMultiline, wrapperClassName, changeCharactersCount,
  inputsLength,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  const LSCounter = () => localStorage.setItem('counter', JSON.stringify(inputsLength));

  useEffect(() => {
    const countValuesLS = localStorage.getItem('counter');
    if (countValuesLS) {
      const countJson = JSON.parse(countValuesLS);
      inputsLength.name = countJson.name;
      inputsLength.email = countJson.email;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={wrapperClassName}>
        <TextField
          id={id}
          name={name}
          type={type}
          label={`${label}${isRequired ? requiredMessage : optionalMessage}`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            changeCharactersCount(e);
            onChange(e);
            LSCounter();
          }}
          onBlur={onBlur}
          helperText={helperText}
          disabled={isDisabled}
          error={hasError}
          variant={variant}
          multiline={isMultiline}
          fullWidth
          style={{ position: 'relative' }}
        />
        <div
          className={styles.counter}
        >
          {inputsLength[name]}
          {' '}
          /
          {' '}
          {initialProps[name].maxLength}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default memo(Input);

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: null,
  helperText: '',
  isRequired: false,
  isOptionalShowing: false,
  isDisabled: false,
  hasError: false,
  variant: 'outlined',
  isMultiline: false,
  wrapperClassName: null,
  inputsLength: 0,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  isRequired: PropTypes.bool,
  isOptionalShowing: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.string,
  isMultiline: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  changeCharactersCount: PropTypes.func,
  inputsLength: PropTypes.object,
};
