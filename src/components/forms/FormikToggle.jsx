import { useField } from "formik";
import PropTypes from "prop-types";
import Toggle from "./Toggle";


export default function FormikToggle({
  name,
  onChange,
  ...props
}) {

  const [field, meta, helpers] = useField(name);


  const error =
    meta.touched && meta.error
      ? meta.error
      : "";


  const handleChange = (value) => {

    helpers.setValue(value);

    helpers.setTouched(true);

    onChange?.(value);
  };


  return (
    <Toggle
      {...props}
      name={name}
      checked={Boolean(field.value)}
      error={error}
      onChange={handleChange}
    />
  );
}


FormikToggle.propTypes = {

  name: PropTypes.string.isRequired,

  label: PropTypes.string,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  className: PropTypes.string,

  onLabel: PropTypes.string,

  offLabel: PropTypes.string,

  onChange: PropTypes.func,

};