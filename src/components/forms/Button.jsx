import PropTypes from "prop-types";

function Button({
  type = "submit",
  title,
  className = "",
  onClick,
  disabled = false,
  Icon
}) {
  return (
    <button
      type={type}
      className={` button h-10 py-2.5  text-xs flex items-center justify-center gap-x-2 ${className}  `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className=" h-4 w-4" />}

      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
