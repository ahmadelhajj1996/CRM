import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import PhoneInput from "./PhoneInput";

export default function FormikPhoneInput({
  name,
  countryFieldName = "country",
  cityFieldName = "city",
  ...props
}) {
  const [field, meta] = useField(name);
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const error = meta.touched && meta.error ? meta.error : "";

  const fillIfEmpty = (fieldName, value) => {
    if (!fieldName || !value) return;

    // Don't overwrite user-entered values
    if (values[fieldName]) return;

    setFieldValue(fieldName, value);
  };

  return (
    <PhoneInput
      {...props}
      name={name}
      value={field.value ?? ""}
      error={error}
      onChange={(phone) => setFieldValue(name, phone)}
      onBlur={() => setFieldTouched(name, true)}
      onGeoLocation={({ country, city }) => {
        fillIfEmpty(countryFieldName, country);
        fillIfEmpty(cityFieldName, city);
      }}
      onCountryChange={({ name: country }) => {
        setFieldValue(countryFieldName, country);
      }}
    />
  );
}

FormikPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  countryFieldName: PropTypes.string,
  cityFieldName: PropTypes.string,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
};