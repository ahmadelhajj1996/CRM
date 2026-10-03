import clsx from "clsx";
import PropTypes from "prop-types";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error,
  disabled = false,
  className = "",
  name,
  prefix,
  postfix,
  onClickPostfix,
  required = true,
  ...props
}) {
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
          <span
            className={clsx(
              "text-xl leading-none transition-colors",
              "text-red-500",
            )}
          >
            *
          </span>
        )}
      </label>

      <div className="relative group">
        {prefix && (
          <div
            className={clsx(
              "absolute inset-y-0 start-0 flex items-center px-3 border-e transition-colors",
              error
                ? "text-red-500 border-red-500"
                : "text-gray-400 border-gray-900 group-focus-within:text-blue-600 group-focus-within:border-blue-600",
            )}
          >
            {prefix}
          </div>
        )}

        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={value ?? ""}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={clsx(
              "field bg-white min-h-20 transition-colors focus:outline-none",
              prefix && "ps-12",
              postfix && "pe-12",
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-900 focus:border-blue-600",
              className,
            )}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value ?? ""}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={clsx(
              "field  bg-white h-10 py-2.5 transition-colors focus:outline-none",
              prefix && "ps-12",
              postfix && "pe-12",
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-900 focus:border-blue-600",
              className,
            )}
            {...props}
          />
        )}

        {postfix && (
          <button
            type="button"
            onClick={onClickPostfix}
            className={clsx(
              "absolute end-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white p-2.5 border-x transition-colors",
              error
                ? "text-red-500 border-red-500"
                : "text-gray-400 border-gray-900 group-focus-within:text-blue-600 group-focus-within:border-blue-600",
            )}
          >
            {postfix}
          </button>
        )}

        {error && (
          <p className="absolute -bottom-5 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  prefix: PropTypes.node,
  postfix: PropTypes.node,
  onClickPostfix: PropTypes.func,
};
