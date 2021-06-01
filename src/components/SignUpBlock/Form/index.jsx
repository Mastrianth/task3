import React, { memo, useEffect, useState } from 'react';
import { Formik, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import InputMasked from './InputMasked';
import Select from './Select';
import FileInput from './FileInput';
import {
  handleChangeMaskedFactory,
  handleBlurTextFactory,
  validatePhoto,
  getValidationSchema,
  initialValues,
  submittingStatus,
  regexList,
  requiredFields,
  initialStatus,
  removeCounterLS,
} from '../../../utils/formHelpers';
import { fetchCurrentUser, signUpFail, signUpSuccess } from '../../../../redux/actions';
import { getPositions } from '../../../../redux/reducers/signUp';
import classes from './Form.module.scss';
import ButtonComponent from '../../shared/Button/LargePrimaryButtons/LargePrimaryButton';
import useInputsLength, { initialValuesLength } from '../../../utils/useInputLength';
import Preloader from '../../shared/Preloader/Preloader';

const photoValidations = {
  allowedExtensions: ['jpg', 'jpeg'],
  maxFileSize: 5000000,
  minWidth: 70,
  minHeight: 70,
};

export const NakedForm = ({
  t, regexes, requiredFields, positions, values, status, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue, setStatus, isLoadingForm,
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
  const context = useFormikContext();
  const photoValidationSuccess = (file) => {
    setFieldValue('photo', file);
    setStatus({
      photoValid: true,
      photoTouched: true,
      photoErrorMessage: '',
    });
  };
  const photoValidationFail = () => {
    setFieldValue('photo', '');
    setStatus({
      photoValid: false,
      photoTouched: true,
      photoErrorMessage: '',
    });
  };
  const setLocalStorage = (values) => {
    localStorage.setItem('form', JSON.stringify(values));
  };

  useEffect(() => {
    const formValuesLS = localStorage.getItem('form');
    if (formValuesLS) {
      const formJson = JSON.parse(formValuesLS);
      context.values.name = formJson.name;
      context.values.email = formJson.email;
      context.values.phone = formJson.phone;
      context.values.position = formJson.position;
    }
  }, []);

  const handleChangePhoto = (event) => {
    const file = event.target.files[0];
    const {
      allowedExtensions, maxFileSize, minWidth, minHeight,
    } = photoValidations;

    if (file && file.name) {
      validatePhoto(file, photoValidationSuccess,
        photoValidationFail, allowedExtensions,
        maxFileSize, minWidth, minHeight);
    }
  };

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
      options: positions,
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
          helperText={status[`${name}ErrorMessage`] || t(`${name}HelperText`)}
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
          onChange={(e) => {
            onChange(e);
            setLocalStorage(values);
          }}
          helperText={touched[name] && Boolean(errors[name]) ? t(errors[name]) : ''}
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
          onBlur={(e) => {
            onBlur(e);
            setLocalStorage(values);
          }}
          helperText={touched[name] && Boolean(errors[name]) ? t(errors[name]) : t(`${name}HelperText`)}
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
        onBlur={(e) => {
          onBlur(e);
          setLocalStorage(values);
        }}
        helperText={touched[name] && Boolean(errors[name]) ? t(errors[name]) : t(`${name}HelperText`)}
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
      <div className={classes.buttonContainerForm}>
        {isLoadingForm
          ? <Preloader />
          : (
            <ButtonComponent
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              gtmclass="gtm-sendform"
              className={classes.button}
              disabled={(context.values.name.length == 0) || !(context.isValid && status.photoValid)}
              label={t('sign-up')}
            />
          )}
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
  positions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
  })).isRequired,
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
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

const FormikForm = (({
  t, setShowAfter,
}) => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => getPositions(state));
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const onSubmit = (values, {
    setSubmitting, resetForm, setErrors, setStatus,
  }) => {
    const formData = new FormData();
    setIsLoadingForm(true);
    for (const [key, value] of Object.entries(values)) {
      if (key === 'phone') {
        formData.append(key, `+${value}`);
        continue;
      }
      if (key === 'position') {
        formData.append('position_id', value);
        continue;
      }
      formData.append(key, value);
    }
    const successCallback = (id) => {
      setSubmitting(false);
      resetForm(initialValues, initialValuesLength);
      setIsLoadingForm(false);
      setShowAfter(true);
      dispatch(fetchCurrentUser(id));
      removeCounterLS();
    };

    const failCallback = (message, formErrors, errors) => {
      console.log(errors);
      if (errors.email[0] === 'The email has already been taken.') {
        formErrors.email = errors.email[0];
      }
      if (errors.phone[0] === 'The phone has already been taken.') {
        formErrors.phone = errors.phone[0];
      }
      setErrors(formErrors);
      setSubmitting(false);
      setIsLoadingForm(false);
    };

    fetch('https://test2021backend-yaroslav-task5.abztrainee.com/api/v1/token')
      .then((response) => response.json())
      .then((data) => {
        const { token } = data.data;
        const bearerId = `Bearer ${token}`;
        return fetch('https://test2021backend-yaroslav-task5.abztrainee.com/api/v1/users',
          {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: bearerId,
            },
          });
      })
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((data) => {
        if (!data.status) throw new Error(data.data.message);
        successCallback(data.data.user.id);
        dispatch(signUpSuccess());
        localStorage.removeItem('form');
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
          return;
        }

        error.json().then((errorData) => {
          const { status } = error;
          const { message, errors } = errorData;

          const formErrors = {};
          const formStatus = { ...submittingStatus };

          if (status === 409) {
            failCallback(message, formErrors);
            return;
          }

          if (status === 422) {
            failCallback(message, formErrors, errors);
            return;
          }

          for (const key of Object.keys(errors)) {
            if (key === 'position_id') {
              formErrors.position = errors[key].join(' ');
              continue;
            }
            if (key === 'photo') {
              formStatus.photoErrorMessage = errors[key].join(' ');
              formStatus.photoValid = false;
              continue;
            }

            if (key === 'email') {
              if (message === 'The email has already been taken.' || message === 'Benutzer mit derselben E-Mail-Adresse ist bereits vorhanden') {
                setErrors('email', 'email-in-use');
                setSubmitting(false);
                return false;
              }
            }

            if (key === 'phone') {
              if (message === 'The phone has already been taken.' || message === 'Benutzer mit derselben Telefon ist bereits vorhanden') {
                setErrors('phone', 'phone-in-use');
                setSubmitting(false);
                return false;
              }
            }

            formErrors[key] = errors[key].join(' ');
          }
          setErrors(formErrors);
          setStatus(formStatus);
          failCallback();
        });
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      initialStatus={initialStatus}
      onSubmit={onSubmit}
      validationSchema={getValidationSchema}
    >
      {(formikProps, formik) => (
        <NakedForm
          {...formikProps}
          formik={formik}
          t={t}
          requiredFields={requiredFields}
          regexes={regexList}
          positions={positions}
          isLoadingForm={isLoadingForm}
        />
      )}
    </Formik>
  );
});

FormikForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default memo(FormikForm);
