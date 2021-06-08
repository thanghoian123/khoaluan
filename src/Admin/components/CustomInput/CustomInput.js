import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/customInputStyle.js";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const { formControlProps, id, label, success, field, form ,onHandleChange } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  if(onHandleChange){
    onHandleChange(field)
  }

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      <TextField
        color="primary"
        {...props}
        label={label ? label : ""}
        {...field}
        error={showError}
        helperText={errors[name]}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
