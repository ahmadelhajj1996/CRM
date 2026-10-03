export default function LabeledSelect({
  label,
  value,
  options,
  onChange,
  className = "",
}) {
  return (
    <label className={`flex flex-col    gap-y-2 text-sm ${className}`}>
      <span>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" field h-10 pt-1   "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className=" text-gray-800">
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
