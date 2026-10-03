import { useField } from "formik";
import PropTypes from "prop-types";
import Radio from "./Radio";

export default function FormikRadio({ name, onChange, ...props }) {
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && meta.error ? meta.error : "";

  const handleChange = (value) => {
    helpers.setValue(value);

    helpers.setTouched(true);

    onChange?.(value);
  };

  return (
    <Radio
      {...props}
      {...field}
      name={name}
      checked={field.value}
      error={error}
      onChange={handleChange}
    />
  );
}

FormikRadio.propTypes = {
  name: PropTypes.string.isRequired,

  label: PropTypes.string,

  options: PropTypes.array,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  className: PropTypes.string,

  direction: PropTypes.oneOf(["row", "column"]),

  onChange: PropTypes.func,
};
