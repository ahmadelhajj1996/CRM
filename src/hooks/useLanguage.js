import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLang } from "../store/settingSlice";

export function useLanguage() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lang) => {
    dispatch(setLang(lang));

    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  };
  
  return { changeLanguage };
}