import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import classes from './FileInput.module.scss';

const FileInput = ({
  id, name, label, buttonLabel, value, onChange,
  helperText, hasError, isRequired, wrapperClassName,
}) => {
  const cx = classNames.bind(classes);
  const wrapperClasses = classNames(wrapperClassName, classes.fileInputWrapper);
  const inputClasses = cx('fileInput', { error: hasError });
  const mainFileLabelClasses = cx('mainFileLabel', {
    mainFileLabel_filled: value !== 'Upload your photo' && value !== 'No file chosen',
  });
  const helperTextClasses = cx('helperText', { error: hasError });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={wrapperClasses}>
      <input
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        className={inputClasses}
        required={isRequired}
      />
      <label
        htmlFor={id}
        className={mainFileLabelClasses}
      >
        {value || label}
      </label>
      <label htmlFor={id} className={classes.browseFileLabel}>
        {buttonLabel}
      </label>
      {helperText ? <p className={helperTextClasses}>{helperText}</p> : null}
    </div>
  );
};

FileInput.defaultProps = {
  helperText: null,
  isRequired: false,
  wrapperClassName: null,
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

export default FileInput;
