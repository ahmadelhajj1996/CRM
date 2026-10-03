import PropTypes from "prop-types";
import useClickEsc from "../hooks/useClickEsc";
import { AlertTriangle } from "lucide-react";
import ModalActions from "./ModalActions";
import { useTranslation } from "react-i18next";

const Confirm = ({
  isOpen,
  confirmText = "Delete",
  cancelText = "Cancel",
  onClose,
  onConfirm,
  className = "",
}) => {
  useClickEsc(() => {
    if (isOpen) {
      onClose();
    }
  });

  const {t} =   useTranslation()

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center -mt-12"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-6 flex flex-col items-center gap-y-3 p-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full  text-yellow-400 app-bordered   border-yellow-400 ">
          <AlertTriangle size={40} className="  " />
        </div>
        <h2 className=" md:text-xl font-semibold text-gray-800 text-center">
          {t('sure')} 
        </h2>
 

        <ModalActions
          type="confirm"
          onConfirm={onConfirm}
          onClose={onClose}
          className={className}
          confirmText={confirmText}
          cancelText={cancelText}
          confirmDisabled={false}
        />
      </div>
    </div>
  );
};

Confirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType,
  title: PropTypes.string,
  note: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Confirm;
