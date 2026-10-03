import { Fragment, useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Combobox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const DROPDOWN_MAX_HEIGHT = 240; // px, matches max-h-60

// Sentinel value used for the "no selection" placeholder option.
// Kept as a constant so it's easy to check/reuse and never collides
// with a real option value (unlike "" which some APIs use legitimately).
const EMPTY_VALUE = "";

export default function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  error,
  disabled = false,
  loading = false,
  className = "",
  name,
  prefix,
  postfix,
  onClickPostfix,
  required = false,
  multiple = false,
}) {
  const [query, setQuery] = useState("");
  const [placement, setPlacement] = useState("bottom");
  const containerRef = useRef(null);

  const selectedOptions = multiple
    ? options.filter((o) => (value || []).includes(o.value))
    : options.find((o) => o.value === value);

  const placeholderOption = { value: EMPTY_VALUE, label: placeholder };

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toString().toLowerCase().includes(query.toLowerCase()),
        );

  // Only show the placeholder row if it still matches what's typed,
  // and only when there's no current query (native <select> behavior:
  // the empty option is always first, but once you start filtering
  // it makes more sense to just show matches).
  const showPlaceholderOption =
    query === "" || placeholder.toLowerCase().includes(query.toLowerCase());

  const visibleOptions = multiple
    ? filteredOptions
    : showPlaceholderOption
      ? [placeholderOption, ...filteredOptions]
      : filteredOptions;

  const updatePlacement = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < DROPDOWN_MAX_HEIGHT && spaceAbove > spaceBelow) {
      setPlacement("top");
    } else {
      setPlacement("bottom");
    }
  }, []);

  // Keep placement correct if the user scrolls/resizes while it's open.
  useEffect(() => {
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, true);
    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement, true);
    };
  }, [updatePlacement]);

  const handleChange = (val) => {
    if (multiple) {
      onChange?.(val);
    } else {
      onChange?.(val === EMPTY_VALUE ? null : val);
    }
  };

  const handlePostfixClick = (e) => {
    // Prevent the click from bubbling to the field and toggling the
    // combobox open/closed when the postfix has its own action
    // (e.g. a clear button, a unit toggle, an icon action).
    e.stopPropagation();
    onClickPostfix?.(e);
  };

  return (
    <div className="w-full flex flex-col gap-y-1.5" ref={containerRef}>
      <label
        htmlFor={name}
        className={clsx(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          "text-gray-900 group-focus-within:text-blue-600",
        )}
      >
        <span>{label}</span>
        {required && (
          <span className="text-red-500 text-xl leading-none">*</span>
        )}
      </label>

      <Combobox
        value={
          multiple
            ? Array.isArray(value)
              ? value
              : []
            : (value ?? EMPTY_VALUE)
        }
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled || loading}
        name={name}
      >
        <div className="relative rounded-none">
          <div className="relative flex items-stretch">
            {prefix && (
              <div
                className={clsx(
                  "flex items-center p-2.5  border-e transition-colors shrink-0 ",
                  error
                    ? "text-red-500 border-red-500"
                    : "text-gray-400 border-gray-900 group-focus-within:text-blue-600 group-focus-within:border-blue-600",
                )}
              >
                {prefix}
              </div>
            )}

            <div
              onClick={updatePlacement}
              onFocus={updatePlacement}
              className={clsx(
                "field rounded-none px-3 h-10 py-2.5 w-full flex items-center justify-between border transition-colors group",
                prefix && "rounded-s-none border-s-0",
                postfix ? "rounded-e-none border-e-0" : "rounded-e-none",
                !prefix && "rounded-none",
                error
                  ? "border-red-500 focus-within:border-red-500"
                  : "border-gray-900 focus-within:border-blue-600",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className,
              )}
            >
              <Combobox.Input
                id={name}
                className="w-full bg-transparent outline-none text-left disabled:cursor-not-allowed"
                displayValue={() => {
                  if (multiple) {
                    return selectedOptions.map((o) => o.label).join(", ");
                  }

                  return selectedOptions ? selectedOptions.label : "";
                }}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              <Combobox.Button className="shrink-0 ms-2">
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Combobox.Button>
            </div>

            {postfix && (
              <div
                className={clsx(
                  "flex items-center cursor-pointer p-2.5 rounded-e-md transition-colors shrink-0",
                  error
                    ? "text-red-500 border-red-500"
                    : "bg-blue-500 text-white",
                )}
                onClick={handlePostfixClick}
              >
                {postfix}
              </div>
            )}
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className={clsx(
                "absolute z-10 w-full max-h-60 overflow-auto",
                "bg-white rounded-md border shadow-lg",
                "flex flex-col gap-y-1 p-2",
                "focus:outline-none",
                placement === "top" ? "bottom-full mb-1" : "top-full mt-1",
              )}
            >
              {visibleOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-400 select-none">
                  No results found
                </div>
              ) : (
                visibleOptions.map((option) => {
                  const isPlaceholder = option.value === EMPTY_VALUE;

                  return (
                    <Combobox.Option
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      className={({
                        active,
                        selected,
                        disabled: optDisabled,
                      }) =>
                        clsx(
                          "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm font-medium",
                          isPlaceholder && "text-gray-400 italic",
                          optDisabled && "opacity-40 cursor-not-allowed",
                          !optDisabled && active && "bg-blue-100",
                          !optDisabled && !active && "bg-white",
                          !isPlaceholder && selected && "text-blue-600",
                          !isPlaceholder && !selected && "text-gray-800",
                        )
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span>{option.label}</span>
                          {selected && !isPlaceholder && (
                            <Check className="w-4 h-4" />
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
          {error && (
            <p className="absolute -bottom-5 text-xs text-red-500">{error}</p>
          )}
          
        </div>
      </Combobox>
    </div>
  );
}

Select.propTypes = {
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

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),

  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  prefix: PropTypes.node,
  postfix: PropTypes.node,
  onClickPostfix: PropTypes.func,
  multiple: PropTypes.bool,
};
