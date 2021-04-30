import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { ThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import theme from '../../mui/selectTheme';
import arrowDownIcon from '../../assets/img/svg/arrow.svg';

function CustomSelect({
  id, name, label, value, options, onChange,
  helperText, isRequired, isOptionalShowing, isDisabled,
  hasError, variant, margin, isFullWidth,
}) {
  const requiredMessage = isOptionalShowing ? '' : '*';
  const optionalMessage = isOptionalShowing ? ' (optional)' : '';

  const menuItems = options.map((option) => (
    <MenuItem value={option.value}>{option.title}</MenuItem>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Select
        displayEmpty
        IconComponent={arrowDownIcon}
        id={id}
        name={name}
        onChange={onChange}
        renderValue={(val) => (val ? options.find((option) => option.value === val).title : `${label}${isRequired ? requiredMessage : optionalMessage}`)}
        value={value}
        error={hasError}
        variant={variant}
        margin={margin}
        fullWidth={isFullWidth}
      >
        {menuItems}
      </Select>
      <FormHelperText error={hasError} variant={variant}>{helperText}</FormHelperText>
    </ThemeProvider>
  );
}

export default memo(CustomSelect);

CustomSelect.defaultProps = {
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

CustomSelect.propTypes = {
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
  isFullWidth: PropTypes.bool,
};
