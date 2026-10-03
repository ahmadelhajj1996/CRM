import clsx from "clsx";
import PropTypes from "prop-types";

export default function Toggle({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  error,
  required = false,
  className = "",
  onLabel = "ON",
  offLabel = "OFF",
}) {
  return (
    <div className="w-full flex items-center  gap-4">
      {label && (
        <label htmlFor={name} className="label flex items-center gap-1 text-sm">
          <span>{label}</span>

          {required && (
            <span className="text-red-500 text-xl leading-none">*</span>
          )}
        </label>
      )}

      <button
        type="button"
        id={name}
        name={name}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={clsx(
          "relative flex items-center w-14 h-7 rounded-full transition-all duration-300 ",
          "focus:outline-none focus:ring-2 focus:ring-blue-300",
          checked ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        <span
          className={clsx(
            "w-6 h-6 m-0.5 bg-white rounded-full shadow-md",
            "transition-transform duration-300",
          )}
        />
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

Toggle.propTypes = {
  label: PropTypes.string,

  name: PropTypes.string,

  checked: PropTypes.bool,

  onChange: PropTypes.func,

  disabled: PropTypes.bool,

  error: PropTypes.string,

  required: PropTypes.bool,

  className: PropTypes.string,

  onLabel: PropTypes.string,

  offLabel: PropTypes.string,
};
