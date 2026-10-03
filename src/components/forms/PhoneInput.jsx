import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function PhoneInput({
  label,
  value,
  onChange,
  onBlur,
  placeholder = "",
  error,
  disabled = false,
  className = "",
  name,
  required = true,
  onGeoLocation,
  onCountryChange,
  ...props
}) {
  const inputRef = useRef(null);
  const itiRef = useRef(null);

  // Initialize plugin
  useEffect(() => {
    if (!inputRef.current) return;

    const input = inputRef.current;

    const iti = intlTelInput(input, {
      initialCountry: "AE",
      separateDialCode: true,
      nationalMode: false,

      loadUtils: () => import("intl-tel-input/utils"),

      geoIpLookup: async (callback) => {
        try {
          const res = await fetch("https://ipwho.is/");
          const data = await res.json();

          callback((data.country_code || "us").toLowerCase());

          onGeoLocation?.({
            country: data.country,
            city: data.city,
            countryCode: data.country_code,
          });
        } catch {
          callback("us");
        }
      },
    });

    itiRef.current = iti;

    iti.promise.then(() => {
      const country = iti.getSelectedCountryData?.();

      if (!country) return;

      onCountryChange?.({
        name: country.name,
        iso2: country.iso2,
        dialCode: country.dialCode,
      });
    });

    const handleInput = async () => {
      try {
        await iti.promise;

        const number = iti.getNumber();

        onChange?.(number || input.value);
      } catch {
        onChange?.(input.value);
      }
    };

    const handleCountryChange = async () => {
      try {
        await iti.promise;

        const country = iti.getSelectedCountryData();

        if (country) {
          onCountryChange?.({
            name: country.name,
            iso2: country.iso2,
            dialCode: country.dialCode,
          });
        }

        handleInput();
      } catch {
        handleInput();
      }
    };

    input.addEventListener("input", handleInput);
    input.addEventListener("countrychange", handleCountryChange);

    return () => {
      input.removeEventListener("input", handleInput);
      input.removeEventListener("countrychange", handleCountryChange);
      iti.destroy();
    };
  }, []);

  useEffect(() => {
    const iti = itiRef.current;

    if (!iti || value === undefined) return;

    iti.promise
      .then(() => {
        const current = iti.getNumber();

        if ((value ?? "") !== current) {
          iti.setNumber(value ?? "");
        }
      })
      .catch(() => {
        iti.setNumber(value ?? "");
      });
  }, [value]);

  return (
    <div className="w-full flex flex-col gap-y-1.5">
      <label
        htmlFor={name}
        className={clsx(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          "text-gray-900 group-focus-within:text-blue-600",
        )}
      >
        <span>{label}</span>

        {required && (
          <span className="text-xl leading-none text-red-500">*</span>
        )}
      </label>

      <div className="relative group">
        <input
          ref={inputRef}
          id={name}
          name={name}
          type="tel"
          placeholder={placeholder}
          disabled={disabled}
          onBlur={onBlur}
          className={clsx(
            "field bg-white h-10 py-2.5 transition-colors focus:outline-none w-full",
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-900 focus:border-blue-600",
            className,
          )}
          {...props}
        />

        {error && (
          <p className="absolute -bottom-5 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

PhoneInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  onGeoLocation: PropTypes.func,
  onCountryChange: PropTypes.func,
};
