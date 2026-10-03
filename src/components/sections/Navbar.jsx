import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import {
  Globe,
  Menu,

  Earth,

  CheckCheckIcon,
  Power,
} from "lucide-react";
import Dropdown from "../Dropdown";
import { useDropdown } from "../../hooks/useDropdown";
import { languages } from "../../config/constants";
import { useLanguage } from "../../hooks/useLanguage";
import useAuth from "../../hooks/Data/useAuth";
import useClickOutside from "../../hooks/useClickOutside";
import useConfirm from "../../hooks/useConfirm";
import Confirm from "../Confirm";
import { useModal } from "../../hooks/useModal";
import { useForm } from "../../hooks/useForm";
import ChangePasswordForm from "../reusableforms/ChangePasswordForm";
import { changePasswordSchema } from "../../utils/validator";

function Navbar({ onToggleSidebar }) {
  const { i18n } = useTranslation();
  const { isOpen,   modalMode,   closeModal } = useModal();
  
  const {
    open: languageOpen,
    toggle: languageToggle,
    dropdownRef: languageRef,
    close: languageClose,
  } = useDropdown();

   
  
  const { changeLanguage } = useLanguage();
  const { signout, changePassword, changePasswordValues } = useAuth({});

  const languageOptions = languages.map((lang) => ({
    label: (
      <span className=" flex items-center justify-between gap-x-6 text-blue-500  text-xs cursor-pointer">
        <div className="flex gap-2 items-center tracking-wider text-sm font-semibold">
          <Earth size={14} className=" text-gray-400" />
          {lang.name.toUpperCase()}
        </div>
        {/*  */}
        {i18n.language == lang.code && <CheckCheckIcon size={15} />}
      </span>
    ),
    onClick: () => {
      changeLanguage(lang.code);
      languageClose();
    },
  }));

  const logout = () => {
    signout();
    closeConfirm();
  };

  const { confirmOpen, openConfirm, closeConfirm, confirm } =
    useConfirm(logout);

 

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang).then(() => {
      document.dir = savedLang === "ar" ? "rtl" : "ltr";
    });
  }, [i18n]);

  useClickOutside(languageRef, languageClose);


  const { formikProps } = useForm({
    onSubmit: changePassword,
    initialValues: changePasswordValues,
    validationSchema: changePasswordSchema
  });

  return (
    <>
      <div className=" h-[68px] gradient-bg fixed top-0 inset-x-0 z-40 ">
        <div className="flex justify-between items-center px-4  py-5  ">
          <button onClick={onToggleSidebar} className=" md:hidden mb-2">
            <Menu className=" icons" color="white" />
          </button>
          <div className=" ms-auto  flex justify-end items-center gap-x-4 md:gap-x-6">
            <Power
              size={20}
              color="white"
              className=" app-icons  mb-2"
              onClick={openConfirm}
            />

            <div ref={languageRef} className="relative inline-block">
              <button onClick={languageToggle}>
                <Globe className=" app-icons" />
              </button>
              <Dropdown
                open={languageOpen}
                items={languageOptions}
                className={"p-4 "}
              ></Dropdown>
            </div>
 
 
          </div>
        </div>
      </div>

      <ChangePasswordForm
        isOpen={isOpen}
        onClose={closeModal}
        modalMode={modalMode}
        formikProps={formikProps}
      />

      <Confirm
        isOpen={confirmOpen}
        title={"you want to logout ?"}
        note="You will be logged out of the application."
        confirmText="Logout"
        cancelText="Cancel"
        onConfirm={confirm}
        onClose={closeConfirm}
        className="bg"
      />
    </>
  );
}

export default Navbar;
