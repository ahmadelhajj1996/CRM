import { useDispatch, useSelector } from "react-redux";
import { setRowsPerPage, setLang } from "../store/settingSlice";

export default function useSettings() {
  const dispatch = useDispatch();

  const rowsPerPage = useSelector(
    (state) => state.settings.rowsPerPage
  );

  const lang = useSelector(
    (state) => state.settings.lang
  );

  const handleRowsChange = (value) => {
    dispatch(setRowsPerPage(Number(value)));
  };

  const handleLanguageChange = (value) => {
    dispatch(setLang(value));
  };

  return {
    rowsPerPage,
    lang,
    handleRowsChange,
    handleLanguageChange,
  };
}