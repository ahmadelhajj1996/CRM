import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function Sidebar({ items, currentLink, onChange, open, onClose }) {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const {t} =useTranslation()
  useClickOutside(sidebarRef, () => {
    if (window.innerWidth < 768 && open) {
      onClose();
    }
  });

  const isActive = (link) => {
    if (!link) return false;

    const cleanCurrent = (currentLink || "").replace(/\/$/, "");
    const cleanLink = link.replace(/\/$/, "");

    if (cleanLink === "" || cleanLink === "/") {
      return cleanCurrent === "";
    }

    return (
      cleanCurrent === cleanLink || cleanCurrent.startsWith(cleanLink + "/")
    );
  };

  const handleClick = (link) => {
    onChange(link);
    navigate(link);
    setExpanded(false);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => window.innerWidth >= 768 && setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        fixed inset-y-0 left-0 rtl:right-0 h-full
        w-full max-w-60 md:max-w-none
        ${expanded ? "md:w-52" : "md:w-[72px]"}
        bg-white shadow-md z-50
        transition-[width,transform] duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"}
        md:translate-x-0 rtl:md:translate-x-0
      `}
    >
 
      <div className="flex flex-col gap-y-6   pt-[20px] ">
        {items.map((item) => {
          const active = isActive(item.link);
          const Icon = item.icon;
          return (
            <div
              key={item.link}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(item.link)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(item.link);
                }
              }}
              className={` flex gap-2 gap-x-2   justify-start px-4 items-center  ${expanded ? " md:flex  px-2 items-center ms-2  " : " md:flex md:justify-center "} ${
                active ? "active" : "inactive"
              }`}
            >
              {Icon && (
                <Icon
                  size={12}
                  className=" p-[5px] rounded-lg  gradient-bg text-white h-6 w-6 text-3xl font-extrabold cursor-pointer    "
                />
              )}
              {(expanded || window.innerWidth < 768) && (
                <span
                  className={` label text-sm overflow-hidden whitespace-nowrap transition-all duration-500 cursor-pointer   ${
                    expanded
                      ? "md:max-w-40 md:opacity-100 "
                      : "md:max-w-0 md:opacity-0 "
                  }`}
                >
                 {t(`${item.title}`)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentLink: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
