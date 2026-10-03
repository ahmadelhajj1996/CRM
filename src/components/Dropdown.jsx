import PropTypes from "prop-types";


function Dropdown({ children, open, items, className }) {
  if (!open) return null;

  return (
    <div
      className={`absolute    mt-5 end-0  w-max   flex flex-col gap-y-4  shadow-xl  bg-white    text-gray-900   z-50 ${className}`}
    >
      {children}
      {items?.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className=" text-center  hover:bgc transition textxs"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}


Dropdown.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

      onClick: PropTypes.func.isRequired,
    }),
  ),
};

export default Dropdown;
