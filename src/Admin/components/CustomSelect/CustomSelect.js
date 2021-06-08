import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
// core components
import styles from "../../assets/jss/material-dashboard-react/components/customInputStyle.js";
import { FormHelperText, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    inputProps,
    field,
    form,
    initialCategory,
    onChangeItem,
  } = props;

  const { name } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  const handleChangeItem = (selectOption) => {
    let selectValue = selectOption.target
      ? selectOption.target.value
      : selectOption.target;
    const changEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };
    field.onChange(changEvent);
    if (onChangeItem) {
      onChangeItem(changEvent);
    }
  };
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
      ) : null}
      <Select id={id} {...inputProps} {...field} onChange={handleChangeItem}>
        {(initialCategory || []).map((item) => {
          return (
            <MenuItem key={item.id} value={item.typeCode}>
              {item.typeName}
            </MenuItem>
          );
        })}
      </Select>
      {showError && <FormHelperText>{errors[name]}</FormHelperText>}
    </FormControl>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
