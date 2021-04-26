import React, { useState } from 'react';
import './File.scss';

const File = ({ error, disabled }) => {
  const [choosedFilename, setChoosedFilename] = useState(null);
  let placeholderClass = '';
  if (choosedFilename) {
    placeholderClass = 'form__uploadPlaceholder filled';
  } else {
    placeholderClass = 'form__uploadPlaceholder';
  }
  if (disabled) {
    placeholderClass = 'form__uploadPlaceholder disabled';
  }

  return (
    <div style={{ width: 326 }}>
      <div className="form__uploadWrapper">
        <label
          className={
            error
              ? 'form__labelUpload--error'
              : disabled
                ? 'form__labelUpload disabled'
                : 'form__labelUpload'
          }
          htmlFor="form__upload"
        >
          <div
            className={
              disabled
                ? 'form__uploadButtonWrapper disabled'
                : 'form__uploadButtonWrapper'
            }
          >
            <span>Upload</span>
          </div>
          <input
            disabled={disabled}
            className="form__upload"
            id="form__upload"
            type="file"
            name="photo"
            onChange={(e) => (e.target.files[0].name
              ? setChoosedFilename(e.target.files[0].name)
              : '')}
          />
          <div className={placeholderClass}>
            {choosedFilename || 'Upload your photo'}
          </div>
        </label>
      </div>
      <div style={{ paddingLeft: 16 }}>
        {error ? (
          <div className="form__error">{error}</div>
        ) : (
          <div className={disabled ? 'form__text disabled' : 'form__text'}>
            Helper text
          </div>
        )}
      </div>
    </div>
  );
};

export default File;
