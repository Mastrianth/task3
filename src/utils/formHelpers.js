import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { removeAdditionalSpaces, removeAllSpaces, stripCharacters } from './filterString';
import { clearCurrentUser } from '../../redux/actions';

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

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  position: '',
  photo: '',
};

export const initialStatus = {
  photoValid: false,
  photoTouched: false,
  photoErrorMessage: '',
};

export const requiredFields = {
  name: true,
  email: true,
  phone: true,
  position: true,
  photo: true,
};

export const submittingStatus = {
  photoValid: true,
  photoTouched: true,
  photoErrorMessage: '',
};

export const regexList = {
  name: /^[A-z][A-z\s]{1,59}$/,
  // eslint-disable-next-line no-control-regex
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  phone: /^380\d\d\d\d\d\d\d\d\d$/,
  phoneMask: '+38 (099) 999 - 99 - 99',
  phoneMaskCharacters: '\\-\\+\\(\\)\\s',
  phoneWithoutMask: /^\+38 \(0\d\d\)\s\d\d\d\s-\s\d\d\s-\s\d\d$/,
};

export const getValidationSchema = (
  yup.object().shape({
    name: yup.string().required('nameHelperText')
      .required('name-min')
      .min(2, 'name-min')
      .max(60, 'name-max')
      .matches(regexList.name, { message: 'nameHelperText' }),
    email: yup.string().required('emailHelperText')
      .required('email-valid')
      .min(6, 'email-valid')
      .max(128, 'email-valid')
      .matches(regexList.email,
        { message: 'emailHelperText' }),
    phone: yup.string().required('phoneHelperText')
      .matches(regexList.phone,
        { message: 'phoneHelperText' }),
    position: yup.string().required('positionHelperText'),
  })
);
