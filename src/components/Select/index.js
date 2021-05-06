import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MuiSelect from '@material-ui/core/Select';
import { ThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import theme from '../mui/selectTheme';
import arrowDownIcon from '../../assets/img/svg/arrow.svg';

function Select({
  id, name, label, value, options, onChange,
  helperText, isRequired, isOptionalShowing, isDisabled,
  hasError, variant, margin, wrapperClassName,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  const menuItems = options.map((option) => (
    <MenuItem value={option.value} key={option.value}>{option.title}</MenuItem>
  ));

  return (
    <ThemeProvider theme={theme}>
      <div className={wrapperClassName}>
        <MuiSelect
          displayEmpty
          IconComponent={arrowDownIcon}
          id={id}
          name={name}
          onChange={onChange}
          renderValue={(val) => (val ? options.find(
            (option) => option.value === val,
          ).title : `${label}${isRequired ? requiredMessage : optionalMessage}`)}
          value={value}
          error={hasError}
          variant={variant}
          margin={margin}
          disabled={isDisabled}
          fullWidth
        >
          {menuItems}
        </MuiSelect>
        <FormHelperText error={hasError} variant={variant}>{helperText}</FormHelperText>
      </div>
    </ThemeProvider>
  );
}

export default memo(Select);

Select.defaultProps = {
  value: '',
  helperText: '',
  isRequired: false,
  isOptionalShowing: false,
  isDisabled: false,
  hasError: false,
  margin: 'dense',
  variant: 'outlined',
  wrapperClassName: null,
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape(
      {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      },
    ),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  isRequired: PropTypes.bool,
  isOptionalShowing: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.string,
  margin: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
