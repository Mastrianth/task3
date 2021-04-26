import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./Field.module.scss";
import { ReactComponent as SelectArrow } from "../../assets/icons/caret-down.svg";

function useInputsLength() {
  const [inputsLength, setInputsLength] = React.useState(0);
  const changeCharactersCount = (e) => {
    setInputsLength(e.target.value.length);
  };
  return { inputsLength, changeCharactersCount };
}

const Field = (props) => {
  const [value, setValue] = useState("");
  const {
    label,
    name,
    required,
    error,
    helperText,
    disabled,
    select,
    children,
  } = props;
  const { inputsLength, changeCharactersCount } = useInputsLength();
  const handleChange = (e) => {
    changeCharactersCount(e);
    setValue(e.target.value);
  };

  const labelClasses = select
    ? {
        root: styles.selectLabelRoot,
        focused: styles.selectLabelFocused,
        error: styles.selectLabelError,
        shrink: styles.selectLabelShrink,
      }
    : {
        root: styles.selectInputRoot,
        focused: styles.labelFocused,
        error: styles.labelError,
      };

  const inputClasses = select
    ? {
        root: styles.selectInputRoot,
        focused: styles.selectInputFocused,
        error: styles.selectInputError,
        filled: styles.selectInputFilled,
      }
    : {
        root: styles.inputRoot,
        focused: styles.inputFocused,
        error: styles.inputError,
      };

  return (
    <StylesProvider injectFirst>
      <TextField
        variant="outlined"
        onChange={(e) => {
          handleChange(e);
        }}
        value={value}
        label={label}
        name={name}
        required={required}
        error={error}
        helperText={helperText}
        disabled={disabled}
        select={select}
        SelectProps={{
          IconComponent: SelectArrow,
          classes: {
            root: styles.selectRoot,
            focused: styles.selectFocused,
            error: styles.selectError,
            selectMenu: styles.selectMenu,
          },
        }}
        InputProps={{
          classes: inputClasses,
        }}
        InputLabelProps={{
          classes: labelClasses,
        }}
        FormHelperTextProps={{
          classes: {
            root: styles.helperRoot,
          },
        }}
      >
        {children}
      </TextField>
      <div
        style={{
          position: "absolute",
          top: "75px",
          left: "300px",
          bottom: "0px",
          right: "6px",
          zIndex: 3,
          fontFamily: "Asap, sans-serif",
          color: disabled ? "rgba(188, 188, 188, 1)" : "rgba(0, 0, 0, 0.87)",
          fontSize: "12px",
          fontWeight: "400",
          fontStyle: "normal",
          letterSpacing: "normal",
          lineHeight: "12px",
          textAlign: "left",
        }}
      >
        {`${inputsLength} / n`}
      </div>
    </StylesProvider>
  );
};

export default Field;

Field.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  select: PropTypes.bool,
  children: PropTypes.element,
};

Field.defaultProps = {
  disabled: false,
  error: false,
  helperText: "Assistive text",
  label: "Label",
  name: "field",
  required: false,
  select: false,
  children: null,
};
