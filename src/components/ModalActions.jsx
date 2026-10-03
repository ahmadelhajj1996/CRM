import PropTypes from "prop-types";
import Button from "./forms/Button";
import { useTranslation } from "react-i18next";

const ModalActions = ({
  type = "confirm",
  confirmText,
  cancelText = "Cancel",
  onConfirm,
  onClose,
  className = "",
  confirmDisabled = "false",
  // closeDisabled="false"
}) => {
  const isConfirm = type === "confirm";

  const {t} =   useTranslation()
  
  return (
    <div className="w-full flex justify-center gap-x-8 mt-5">
      <Button
        className={` p-5 text-[12px] md:p-6 md:text-[12px]   font-medium   rounded-md text-white tracking-widest cursor-pointer focus:outline-0 ${
          isConfirm ? "bg-rose-500" : "bg-blue-500"
        } ${className}`}
        title={ (isConfirm ? t('delete') : t('save') )}
        onClick={onConfirm}
        disabled={confirmDisabled}
      />
      <Button
        className=" p-5 text-[12px] md:p-6 md:text-[12px]      rounded-md text-gray-700 bg-white app-bordered cursor-pointer focus:outline-0  "
        title={t('cancel')}
        onClick={onClose}
      />
    </div>
  );
};

ModalActions.propTypes = {
  type: PropTypes.oneOf(["confirm", "save"]),
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  confirmDisabled: PropTypes.bool,
  // closeDisabled: PropTypes.bool
};

export default ModalActions;
