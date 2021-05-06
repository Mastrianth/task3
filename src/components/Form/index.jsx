import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import Input from '../Input';
import InputMasked from '../InputMasked';
import Select from '../Select';
import FileInput from '../FileInput';
import {
  handleChangeMaskedFactory,
  handleBlurTextFactory,
  validatePhoto,
} from '../utils/formHelpers';

import classes from './Form.module.scss';
import ButtonComponent from '../Button/LargePrimaryButtons/LargePrimaryButton';
import useInputsLength, { initialValuesLength } from '../../utils/useInputLength';

export const NakedForm = ({
  t,
  regexes,
  requiredFields,
  values,
  status,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setStatus,
  isValid,
  dirty,
}) => {
  const handleChangePhone = handleChangeMaskedFactory(setFieldValue, regexes.phoneMaskCharacters);
  const handleBlurReplaceSpaces = handleBlurTextFactory(handleBlur, setFieldValue, {
    onlySingleSpaces: true,
  });
  const handleBlurReplaceAllSpacesAndLowercase = handleBlurTextFactory(handleBlur, setFieldValue, {
    noSpaces: true,
    lowercase: true,
  });
  const { inputsLength, changeCharactersCount, setInputsLength } = useInputsLength();
  const photoValidations = {
    allowedExtensions: ['jpg', 'jpeg'],
    maxFileSize: 5000000,
    minWidth: 70,
    minHeight: 70,
  };

  const handleChangePhoto = (event) => {
    const file = event.target.files[0];
    const {
      allowedExtensions, maxFileSize, minWidth, minHeight,
    } = photoValidations;

    if (file && file.name) {
      if (validatePhoto(file, allowedExtensions, maxFileSize, minWidth, minHeight)) {
        setFieldValue('photo', file);
        setStatus({ photoValid: true, photoTouched: true });
        return;
      }
      setStatus({ photoValid: false, photoTouched: true });
    }
  };

  const isSubmitDisabled = !(isValid && dirty && status.photoValid) || isSubmitting;

  const requiredFieldsValues = Object.values(requiredFields);
  const requiredFieldsLength = requiredFieldsValues.reduce((prev, curr) => (prev + (curr ? 1 : 0)), 0);
  const isOptionalShowing = requiredFieldsLength >= requiredFieldsValues.length / 2;

  const inputConfig = [
    {
      name: 'name',
      onChange: handleChange,
      onBlur: handleBlurReplaceSpaces,
      wrapperClassName: classes.inputWrapper,
      hasPlaceholder: true,
    },
    {
      name: 'email',
      type: 'email',
      onChange: handleChange,
      onBlur: handleBlurReplaceAllSpacesAndLowercase,
      wrapperClassName: classes.inputWrapper,
      hasPlaceholder: true,
    },
    {
      name: 'phone',
      type: 'tel',
      mask: regexes.phoneMask,
      maskPlaceholder: '+38 (XXX) XXX XX XX',
      onChange: handleChangePhone,
      onBlur: handleBlur,
      wrapperClassName: classes.inputWrapper,
    },
    {
      name: 'position',
      options: [
        { value: 10, title: 'Ten' },
        { value: 20, title: 'Twenty' },
        { value: 30, title: 'Thirty' },
      ],
      onChange: handleChange,
      wrapperClassName: classes.bottomInputWrapper,
    },
    {
      name: 'photo',
      type: 'file',
      onChange: handleChangePhoto,
      wrapperClassName: classes.bottomInputWrapper,
    },
  ];

  const inputsHTML = inputConfig.map(({
    name,
    type = 'text',
    mask = null,
    maskPlaceholder = null,
    options = null,
    onChange,
    onBlur = null,
    wrapperClassName = null,
    hasPlaceholder = false,
  }) => {
    if (type === 'file') {
      return (
        <FileInput
          id={name}
          name={name}
          label={t(`${name}Label`)}
          buttonLabel={t(`${name}ButtonLabel`)}
          value={values[name]}
          onChange={onChange}
          helperText={t(`${name}HelperText`)}
          hasError={status[`${name}Touched`] && !status[`${name}Valid`]}
          wrapperClassName={wrapperClassName}
          key={name}
        />
      );
    }

    if (options) {
      return (
        <Select
          id={name}
          name={name}
          label={t(`${name}Label`)}
          value={values[name]}
          options={options}
          onChange={onChange}
          helperText={touched[name] ? t(`${name}HelperText`) : ''}
          hasError={touched[name] && Boolean(errors[name])}
          isRequired={requiredFields[name]}
          isOptionalShowing={isOptionalShowing}
          wrapperClassName={wrapperClassName}
          key={name}
        />
      );
    }

    if (mask) {
      return (
        <InputMasked
          id={name}
          name={name}
          label={t(`${name}Label`)}
          type={type}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          helperText={t(`${name}HelperText`)}
          hasError={touched[name] && Boolean(errors[name])}
          isRequired={requiredFields[name]}
          isOptionalShowing={isOptionalShowing}
          wrapperClassName={wrapperClassName}
          key={name}
        />
      );
    }

    return (
      <Input
        id={name}
        name={name}
        label={t(`${name}Label`)}
        type={type}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        helperText={t(`${name}HelperText`)}
        hasError={touched[name] && Boolean(errors[name])}
        isRequired={requiredFields[name]}
        isOptionalShowing={isOptionalShowing}
        wrapperClassName={wrapperClassName}
        placeholder={hasPlaceholder ? t(`${name}Placeholder`) : null}
        key={name}
        changeCharactersCount={changeCharactersCount}
        inputsLength={inputsLength}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.inputsContainer}>
        {inputsHTML}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '70px' }}>
        <ButtonComponent
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          isDisabled={isSubmitDisabled}
          label={t('sign-up')}
        />
      </div>

    </form>
  );
};

NakedForm.propTypes = {
  t: PropTypes.func.isRequired,
  regexes: PropTypes.shape({
    phoneMask: PropTypes.string,
    phoneMaskCharacters: PropTypes.string,
  }).isRequired,
  requiredFields: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    phone: PropTypes.bool,
    position: PropTypes.bool,
    photo: PropTypes.bool,
  }).isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  status: PropTypes.shape({
    photoValid: PropTypes.bool,
    photoTouched: PropTypes.bool,
  }).isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    phone: PropTypes.bool,
    position: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
};

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position: '',
  photo: '',
};

const initialStatus = {
  photoValid: false,
  photoTouched: false,
};

const requiredFields = {
  name: true,
  email: true,
  phone: true,
  position: true,
  photo: true,
};

const regexList = {
  name: /^[A-z][A-z\s]{1,59}$/,
  // eslint-disable-next-line no-control-regex
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  phone: /^380\d\d\d\d\d\d\d\d\d$/,
  phoneMask: '+38 (099) 999 99 99',
  phoneMaskCharacters: '\\-\\+\\(\\)\\s',
};

const getValidationSchema = (t) => (
  yup.object().shape({
    name: yup.string().required(t('nameHelperText'))
      .matches(regexList.name, { message: t('nameHelperText') }),
    email: yup.string().required(t('emailHelperText'))
      .min(2, t('emailHelperText'))
      .max(100, t('emailHelperText'))
      .matches(regexList.email,
        { message: t('emailHelperText') }),
    phone: yup.string().required(t('phoneHelperText'))
      .matches(regexList.phone,
        { message: t('phoneHelperText') }),
    position: yup.string().required(t('positionHelperText')),
  })
);

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    // const filteredValues = Object.fromEntries(
    //   Object.entries(values).map(([key, value]) => [key, value.trim().replace(/ {2,}/g, ' ')]),
    // );
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm(initialValues, initialValuesLength);
  }, 1000);
};

const FormikForm = (({ t }) => (
  <Formik
    initialValues={initialValues}
    initialStatus={initialStatus}
    onSubmit={onSubmit}
    validationSchema={getValidationSchema(t)}
  >
    {(formikProps) => (
      <NakedForm
        {...formikProps}
        t={t}
        requiredFields={requiredFields}
        regexes={regexList}
      />
    )}
  </Formik>
));

FormikForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default FormikForm;
