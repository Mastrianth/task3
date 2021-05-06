import { removeAdditionalSpaces, removeAllSpaces, stripCharacters } from './filterString';

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

export const validatePhoto = (file, allowedExtensions, maxFileSize, minWidth, minHeight) => {
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
          // success
          return true;
        }
        // wrong dimensions
        return false;
      };
    }
    // wrong file size
    return false;
  }
  // wrong extension
  return false;
};

export const initialProps = {
  name: {
    maxLength: 60,
  },
  email: {
    maxLength: 128,
  },
};
