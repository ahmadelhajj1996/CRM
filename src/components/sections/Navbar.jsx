// import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "../forms/Button";
import { useEffect } from "react";

import {
  User,
  Globe,
  Menu,
  LogOut,
  Earth,
  Check,
  Bell,
  Clock,
  CheckCheckIcon,
  ArrowRight,
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
import { useNavigate } from "react-router-dom";
import { changePasswordSchema } from "../../utils/validator";

function Navbar({ onToggleSidebar }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate()
  const { isOpen,   modalMode, openModal, closeModal } = useModal();
  
  const {
    open: languageOpen,
    toggle: languageToggle,
    dropdownRef: languageRef,
    close: languageClose,
  } = useDropdown();

  const {
    open: notificationsOpen,
    toggle: notificationsToggle,
    dropdownRef: notificationsRef,
    close: notificationsClose,
  } = useDropdown();

  const {
    open: userOpen,
    toggle: userToggle1,
    dropdownRef: userRef,
    close: userClose,
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
    userClose();
    closeConfirm();
  };

  const { confirmOpen, openConfirm, closeConfirm, confirm } =
    useConfirm(logout);

  const userItems = [
    {
      label: (
        <span className="flex items-center justify-center text-red-500 font-medium hover:font-semibold gap-2 py-2.5 border-t">
          <LogOut size={16} className=" rotate-180" />
          Logout
        </span>
      ),
      onClick: logout,
    },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang).then(() => {
      document.dir = savedLang === "ar" ? "rtl" : "ltr";
    });
  }, [i18n]);

  useClickOutside(notificationsRef, notificationsClose);
  useClickOutside(languageRef, languageClose);
  useClickOutside(userRef, userClose);

  const unreadCount = 99;

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

            <div ref={notificationsRef} className="relative inline-block">
              <button onClick={notificationsToggle}>
                <Bell className=" app-icons" />
                {unreadCount > 0 && (
                  <span className="absolute     -top-3 start-1   px-1.5 font-bold py-[2px] text-xs flex   items-center justify-center rounded-full bg-red-500  textsm   text-white shadow">
                    {unreadCount > 98 ? "+99" : unreadCount}
                  </span>
                )}
              </button>
              <Dropdown
                open={notificationsOpen}
                className={" pt-5   rounded-lg   "}
              >
                <div className=" px-2  flex justify-between">
                  <div className="flex items-center gap-x-3  w-full ">
                    <Bell
                      size={32}
                      color="gray"
                      className=" p-2 bg-gray-100 rounded-md"
                    />
                    <div className="flex flex-col   min-w-0">
                      <p className=" tracking-wide font-bold ">
                        {"Notifications"}
                      </p>
                      <span className="description font-light text-sm -mt-1 w-full text-gray-700">
                        {"422 unred"}
                      </span>
                    </div>
                  </div>
                  <Button
                    title="mark all read "
                    className=" inline-block w-[180px] border-[1px] border-gray-700   text-blue-700 "
                    Icon={CheckCheckIcon}
                  />
                </div>

                <div className="bg-gray-50 flex flex-col gap-y-0.5 overflow-y-auto max-h-[275px]">
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-8 items-center  p-2 border-s-[3px] border-blue-700">
                    <div className="col-span-7 flex items-center gap-x-3 ">
                      <Bell
                        size={32}
                        color="gray"
                        className=" p-2 bg-white rounded-sm"
                      />
                      <div className="flex flex-col   min-w-0">
                        <p className="text-xs tracking-wider font-medium cursor-pointer hover:text-blue-700 hover:font-semibold">
                          Invoice Added: INO2026Aj0009
                        </p>
                        <span className=" text-[10px] font-light mt-1  w-full text-gray-700 flex gap-x-2 items-center">
                          <Clock size={10} color="gray" />6 hours ago
                        </span>
                      </div>
                    </div>
                    <Check
                      size={20}
                      className=" p-0.5 border-[1px] bg-white rounded-sm"
                    />
                  </div>
                </div>

                <div className=" -mt-8 flex justify-center items-center gap-x-3 py-3 text-blue-700 font-semibold bg-gray-100 cursor-pointer ">
                  View all notifications
                  <ArrowRight size={16} className=" rtl:rotate-180" />
                </div>
              </Dropdown>
            </div>

            <div ref={userRef} className="relative inline-block">
              <button onClick={userToggle1}>
                <User className=" app-icons  w-7 h-7" />
              </button>
              <Dropdown open={userOpen} items={userItems} className={" pt-6  "}>
                <div className="flex flex-col gap-y-6 px-12">
                  <div className=" flex flex-col  items-center justify-center">
                    <h2 className=" text-gray-900   font-bold">
                      Ajman Branch Manger
                    </h2>
                    <span className=" -mt-1.5 text-sm text-gray-700">
                      ajman@branch.com
                    </span>
                  </div>

                  <div className=" flex flex-col gap-y-1.5  items-center justify-center text-blue-700">
                    <button 
                      onClick={()=>{
                        userClose()
                        navigate('profile')
                      }}
                      className=" cursor-pointer">profile</button>
                    <button
                      className=" cursor-pointer"
                      onClick={() => {
                        userClose()  
                        openModal("add")
                      }}
                    >
                      change password
                    </button>
                  </div>
                </div>
              </Dropdown>
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
