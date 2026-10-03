import { useCallback } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "./sections/Breadcrumbs";
import ModalActions from "./ModalActions";
import usePlacement from "../hooks/usePlacement";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
  onAfterClose,
  className = "",
  onConfirm,
  confirmText = "save",
  backText = "cancel",
  isConfirmLoading = false,
  showActions = true,
}) => {
  const sizeClasses = {
    sm: " w-full sm:w-[30rem]",
    md: "w-full sm:w-[40rem]   ",
    lg: "w-full md:ms-18 ",
  };

  const paddingClasses = {
    sm: "pt-20 sm:py-20",
    md: " pt-30 sm:py-22  sm:mx-4  ",
    lg: "pt-17 ",
  };

  const handleClose = useCallback(() => {
    onClose();
    if (onAfterClose) onAfterClose();
  }, [onClose, onAfterClose]);

  const handleConfirm = useCallback(() => {
    if (onConfirm) {
      onConfirm();
    } else {
      handleClose();
    }
  }, [onConfirm, handleClose]);

  const { placement, containerRef: modalRef } = usePlacement({
    height: 80,
  });

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0  z-40 flex justify-center overflow-y-auto ${paddingClasses[size]}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <div
        ref={modalRef}
        className={` relative w-full  ${sizeClasses[size]} bg-white   shadow-lg ${className} flex flex-col h-auto max-h-full`}
      >
        {(size === "md" || size === "sm") && (
          <>
            <h2
              className="textsm  p-6 gradient-bg font-bold text-white hidden sm:flex items-center justify-between shrink-0"
              id="modal-title"
            >
              {title}
            </h2>
            <div className="sm:hidden">
              <Breadcrumbs title={title} onClick={onClose} show={false} />
            </div>
          </>
        )}

        {size === "lg" && <Breadcrumbs title={title} show={false} />}

        <div className="flex-1 overflow-y-auto min-h-0 ">
          <div
            className={` px-4 ${(size == "md" || size == "sm") ? "py-20 md:py-6"  : "pt-20 pb-4 md:px-8"}`}
          >
            {children}
          </div>
        </div>
        {showActions && (
          <div className="pb-4">
            <ModalActions
              type="save"
              onConfirm={handleConfirm}
              onClose={handleClose}
              className={`  bottom-6 inset-x-0`}
              confirmText={isConfirmLoading ? "saving ..." : confirmText}
              cancelText={backText}
              confirmDisabled={isConfirmLoading}
              // closeDisabled={isConfirmLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onAfterClose: PropTypes.func,
  className: PropTypes.string,
  confirmText: PropTypes.string,
  backText: PropTypes.string,
  onConfirm: PropTypes.func,
  isConfirmLoading: PropTypes.bool,
};

export default Modal;
