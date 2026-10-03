import PropTypes from "prop-types";

export default function PerPage({
  label = "Show : ",
  value,
  options = [5, 10, 15, 20],
  onChange,
  className = "",
}) {
  return (
    <label className={`flex flex-col    gap-y-2 text-sm ${className}`}>
      <span className="">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="   field h-10 pt-1.5 "
      >
        {options.map((option) => (
          <option key={option} value={option} className=" text-gray-800">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

PerPage.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  className: PropTypes.string,
};
