import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import classes from './FileInput.module.scss';
import uploadIcon from '../../../../assets/img/svg/arrow.svg';
import Img from '../../../shared/Img';

const FileInput = ({
  id, name, label, buttonLabel, value, onChange,
  helperText, hasError, wrapperClassName,
}) => {
  const fileName = value.name;

  const cx = classNames.bind(classes);
  const wrapperClasses = classNames(wrapperClassName, classes.fileInputWrapper);
  const inputClasses = cx('fileInput', { error: hasError });
  const mainFileLabelClasses = cx('mainFileLabel', {
    mainFileLabel_filled: fileName,
  });
  const helperTextClasses = cx('helperText', { error: hasError });

  return (
    useMemo(() => (
      <div className={wrapperClasses}>
        <input
          type="file"
          id={id}
          name={name}
          onChange={onChange}
          className={inputClasses}
        />
        <div className={classes.labelWrapper}>
          <label htmlFor={id} className={classes.browseFileLabel}>
            <span className={classes.uploadText}>{label}</span>
          </label>
          <label
            htmlFor={id}
            className={mainFileLabelClasses}
          >
            {fileName || buttonLabel}
          </label>
        </div>
        {helperText ? <p className={helperTextClasses}>{helperText}</p> : null}
      </div>
    ),
    [onChange[name], hasError[name]])
  );
};

FileInput.defaultProps = {
  helperText: null,
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
  wrapperClassName: PropTypes.string,
};

export default memo(FileInput);
