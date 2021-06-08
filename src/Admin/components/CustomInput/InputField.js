import { FormControl, Input } from "@material-ui/core";
import React, { useEffect } from "react";

function InputField(props) {
  const { field, form, label, id, rows, onHandleChange, type } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  if (onHandleChange) {
    onHandleChange(field.name, field.value);
  }
  console.log(field);
  return (
    <FormControl>
      <Input
        {...props}
        error={showError}
        id={id}
        label={label ? label : ""}
        {...field}
        helperText={errors[name]}
        rows={4}
        multiline={rows ? true : false}
      />
      {/* {showError && <p>{errors[name]}</p>} */}
    </FormControl>
  );
}

export default InputField;
