import { useField } from "formik";
import Input from "./Input";
import PropTypes from "prop-types";

export default function FormikInput({
  name,
  ...props
}) {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error 
    ? meta.error 
    : "";

  return (
    <Input
      {...props}
      {...field}
      name={name}
      error={error}
      value={field.value ?? ""}
    />
  );
}

FormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  prefix: PropTypes.node,
  postfix: PropTypes.node,
  onClickPostfix: PropTypes.func,
};