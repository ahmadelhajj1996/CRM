import { useField } from "formik";
import PropTypes from "prop-types";
import Select from "./Select";

export default function FormikSelect({
  name,
  onChange,
  multiple = false,
  ...props
}) {
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && meta.error ? meta.error : "";

  const handleChange = (value) => {
    helpers.setValue(value);
    helpers.setTouched(true);

    // Call user's onChange if provided
    onChange?.(value);
  };

  return (
    <Select
      {...props}
      {...field}
      name={name}
      value={
        multiple
          ? Array.isArray(field.value)
            ? field.value
            : []
          : (field.value ?? "")
      }
      error={error}
      onChange={handleChange}
      multiple={multiple}
    />
  );
}

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,

  label: PropTypes.string,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      disabled: PropTypes.bool,
    }),
  ),

  placeholder: PropTypes.string,

  disabled: PropTypes.bool,

  loading: PropTypes.bool,

  required: PropTypes.bool,

  className: PropTypes.string,

  prefix: PropTypes.node,

  postfix: PropTypes.node,

  onClickPostfix: PropTypes.func,

  onChange: PropTypes.func,
};
