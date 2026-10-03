import { useState, useId, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Filter, ChevronUp, ChevronDown } from "lucide-react";

export default function FilterPanel({
  icon: Icon = Filter,
  title = "Filters",
  options = [],
  value,
  onChange,
  showDateRange = true,
  dateFromLabel = "Date From",
  dateToLabel = "Date To",
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  resetLabel = "Reset",
  onReset,
  defaultOpen = false,
  closeOnOutsideClick = true,
  className = "",
  bodyClassName = "",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const groupId = useId();
  const containerRef = useRef(null);

  // Close the dropdown when clicking anywhere outside the button/panel.
  useEffect(() => {
    if (!closeOnOutsideClick || !open) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, closeOnOutsideClick]);

  return (
    <div className={clsx("relative w-full ", className)} ref={containerRef}>
      {/* Header / trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={groupId}
        className={clsx(
          "w-full flex items-center justify-between gap-x-2  p-2 bg-white text-gray-700",
          "border border-gray-200 rounded-lg shadow-sm",
        )}
      >
        <span className="flex items-center gap-x-2 font-medium">
          <Icon className="w-4 h-4 text-gray-500" />
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-blue-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-blue-500" />
        )}
      </button>

      {open && (
        <div
          id={groupId}
          className={clsx(
            "absolute z-20 top-full left-0 mt-1 w-full",
            "bg-white border border-gray-200 rounded-lg shadow-lg",
            "p-4 flex flex-col gap-y-4",
            bodyClassName,
          )}
        >
          {options.length > 0 && (
            <div
              role="radiogroup"
              aria-label={title}
              className="flex flex-col gap-y-3"
            >
              {options.map((option) => {
                const inputId = `${groupId}-${option.value}`;
                const checked = value === option.value;

                return (
                  <label
                    key={option.value}
                    htmlFor={inputId}
                    className={clsx(
                      "flex items-center gap-x-3 text-sm cursor-pointer select-none",
                      option.disabled && "opacity-40 cursor-not-allowed",
                      checked ? "text-gray-900" : "text-gray-600",
                    )}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name={groupId}
                      value={option.value}
                      checked={checked}
                      disabled={option.disabled}
                      onChange={() => onChange?.(option.value)}
                      className={clsx(
                        "w-5 h-5 shrink-0 appearance-none rounded-full border-2 border-gray-300",
                        "checked:border-[6px] checked:border-blue-500",
                        "focus:outline-none focus:ring-2 focus:ring-blue-200",
                        "disabled:cursor-not-allowed",
                        "transition-all",
                      )}
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          )}

          {showDateRange && (
            <div className="flex items-center gap-x-3">
              <div className="flex flex-col gap-y-1 flex-1">
                <span className="text-xs font-medium text-gray-800">
                  {dateFromLabel}
                </span>
                <input
                  type="date"
                  value={dateFrom || ""}
                  onChange={(e) => onDateFromChange?.(e.target.value)}
                  className={clsx(
                    "w-[110px] h-8  px-1  rounded-md border border-gray-300 text-xs text-gray-500",
                    "focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400",
                  )}
                />
              </div>
              <div className="flex flex-col gap-y-1 flex-1">
                <span className="text-sm font-medium text-gray-800">
                  {dateToLabel}
                </span>
                <input
                  type="date"
                  value={dateTo || ""}
                  onChange={(e) => onDateToChange?.(e.target.value)}
                  className={clsx(
                    "w-[110px] h-8  px-1  rounded-md border border-gray-300 text-xs text-gray-500",
                    "focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400",
                  )}
                />
              </div>
            </div>
          )}

          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className={clsx(
                "self-start px-4 h-9 rounded-md text-sm font-medium",
                "bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors",
              )}
            >
              {resetLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

FilterPanel.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.node,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      disabled: PropTypes.bool,
    }),
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,

  showDateRange: PropTypes.bool,
  dateFromLabel: PropTypes.node,
  dateToLabel: PropTypes.node,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  onDateFromChange: PropTypes.func,
  onDateToChange: PropTypes.func,

  resetLabel: PropTypes.node,
  onReset: PropTypes.func,

  defaultOpen: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
};
