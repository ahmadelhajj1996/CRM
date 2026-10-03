import clsx from "clsx";
import PropTypes from "prop-types";

export default function Radio({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  error,
  required = false,
  className = "",
  options = [],
  direction = "row",
}) {
  return (
    <div className="w-full flex flex-col gap-y-2">

      {label && (
        <label className="label flex items-center gap-1 text-sm">
          <span>{label}</span>

          {required && (
            <span className="text-red-500 text-xl leading-none">
              *
            </span>
          )}
        </label>
      )}


      <div
        className={clsx(
          "flex gap-4",
          direction === "column" && "flex-col"
        )}
      >

        {options.map((option) => {

          const isChecked =
            checked === option.value;


          return (
            <label
              key={option.value}
              htmlFor={`${name}-${option.value}`}
              className={clsx(
                "flex items-center gap-2 cursor-pointer select-none",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
            >

              <input
                id={`${name}-${option.value}`}
                name={name}
                type="radio"
                value={option.value}
                checked={isChecked}
                disabled={disabled || option.disabled}
                onChange={() => onChange?.(option.value)}
                className={clsx(
                  "w-5 h-5 text-gray-600",
                  "border-blue-300",
                  "focus:ring-gray-500",
                  className
                )}
              />


              <span className="text-sm text-gray-700">
                {option.label}
              </span>


            </label>
          );
        })}

      </div>


      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

    </div>
  );
}


Radio.propTypes = {

  label: PropTypes.string,

  name: PropTypes.string,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  checked: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),


  onChange: PropTypes.func,


  disabled: PropTypes.bool,


  error: PropTypes.string,


  required: PropTypes.bool,


  className: PropTypes.string,


  direction: PropTypes.oneOf([
    "row",
    "column",
  ]),


  options: PropTypes.arrayOf(
    PropTypes.shape({

      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,


      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,


      disabled: PropTypes.bool,

    })
  ),
};