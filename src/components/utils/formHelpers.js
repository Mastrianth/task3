import { useDispatch } from 'react-redux';
import { removeAdditionalSpaces, removeAllSpaces, stripCharacters } from './filterString';
import { clearCurrentUser } from '../../../redux/actions';

export const handleChangeMaskedFactory = (setFieldValue, charsToStrip) => (event) => {
  const { name, value } = event.target;

  const cleanValue = stripCharacters(value, charsToStrip);
  setFieldValue(name, cleanValue);
};

export const handleBlurTextFactory = (handleBlur, setFieldValue, {
  onlySingleSpaces = false,
  noSpaces = false,
  lowercase = false,
} = {}) => (event) => {
  const { name, value } = event.target;
  handleBlur(event);

  let newValue = value;

  if (onlySingleSpaces) {
    newValue = removeAdditionalSpaces(newValue);
  }

  if (noSpaces) {
    newValue = removeAllSpaces(newValue);
  }

  if (lowercase) {
    newValue = newValue.toLowerCase();
  }

  setFieldValue(name, newValue);
};

export const validatePhoto = (
  file, successCallback, failCallback,
  allowedExtensions, maxFileSize, minWidth, minHeight,
) => {
  const fileName = file.name;
  const fileExtension = fileName.replace(/^.*\./, '');
  const fileSize = file.size;

  if (allowedExtensions.includes(fileExtension)) {
    if (fileSize <= maxFileSize) {
      const img = new Image();

      img.src = window.URL.createObjectURL(file);
      img.onload = (event) => {
        const width = event.target.naturalWidth;
        const height = event.target.naturalHeight;

        if (width >= minWidth && height >= minHeight) {
          successCallback(file);
          return;
        }

        // wrong dimensions
        failCallback();
      };
      img.onerror = failCallback;
      return;
    }
  }
  // catch all fail
  failCallback();
};

export const initialProps = {
  name: {
    maxLength: 60,
  },
  email: {
    maxLength: 128,
  },
};

export const removeUser = () => {
  localStorage.removeItem('user');
  return clearCurrentUser();
};

