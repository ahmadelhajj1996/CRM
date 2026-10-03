import { MoreVertical } from "lucide-react";
import { useState, useEffect  } from "react";
import PropTypes from "prop-types";
import usePlacement from "../hooks/usePlacement";
import { createPortal } from "react-dom";

const ActionDropdown = ({
  items = [],
  width = "w-36",
  trigger = <MoreVertical size={18} />,
  className = "",
}) => {
  const [open, setOpen] = useState(false);


  const { placement, containerRef, updatePlacement , dropdownRef } = usePlacement({
    height: 150,
    width: 160,
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = (e) => {
      const clickedOutsideButton = !containerRef.current?.contains(e.target);

      const clickedOutsideDropdown = !dropdownRef.current?.contains(e.target);

      if (clickedOutsideButton && clickedOutsideDropdown) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [containerRef]);

  const handleToggle = () => {
    setOpen((prev) => !prev);

    requestAnimationFrame(() => {
      updatePlacement();
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className="p-2 rounded hover:bg-gray-100"
      >
        {trigger}
      </button>

      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "fixed",
              top: placement.top,
              left: placement.left,
            }}
            className={`
              ${width}
              bg-white shadow-2xl rounded-lg
              z-[9999]
              overflow-hidden
              ${className}
            `}
                    >
            {items
              .filter((item) => item.show !== false)
              .map(
                ({
                  key,
                  label,
                  icon: Icon,
                  onClick,
                  className = "",
                  disabled = false,
                }) => (
                  <button
                    key={key}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      onClick?.();
                      setOpen(false);
                    }}
                    className={`
                      flex items-center gap-2 
                      w-full px-3 py-2
                      text-xs md:text-sm
                      hover:bg-gray-100
                      disabled:opacity-50
                      ${className}
                    `}
                  >
                    {Icon && <Icon size={14} />}
                    {label}
                  </button>
                ),
              )}
          </div>,
          document.body,
        )}
    </div>
  );
};

ActionDropdown.propTypes = {
  items: PropTypes.array.isRequired,
  width: PropTypes.string,
  trigger: PropTypes.node,
  className: PropTypes.string,
};

export default ActionDropdown;
