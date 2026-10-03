import Button from "./forms/Button";
import { Plus, Search } from "lucide-react";
import PerPage from "./PerPage";
import LabeledSelect from "./ExportSelect";
import Input from "./forms/Input";
import Select from "./forms/Select";
import { useTranslation } from "react-i18next";

function Control({
  filterable = false,
  selectedLabel,
  options,
  selected,
  setSelected,
  // onSelectedChange,
  search,
  setSearch,
  // onClickPostfix,
  rowsPerPage,
  setRowsPerPage,
  exportExcel,
  exportPdf,
  withAdd = true,
  onAdd,
  title,
}) {

  const {t} =  useTranslation()

  return (
    <div className=" w-full rounded-2xl bg-white p-10 px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6  items-center">
      <div
        className={` sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-6 justify-center items-center`}
      >

        <LabeledSelect
          label= {t('export')}
          value=""
          options={[
            { value: "", label: "select" },
            { value: "excel", label: "Excel" },
            { value: "pdf", label: "PDF" },
          ]}
          onChange={(type) => {
            if (type === "excel") exportExcel();
            if (type === "pdf") exportPdf();
          }}
        />

        {withAdd && (
          <Button
            className=" col-span-2 sm:col-span-1 mt-8 rounded-md gradient-bg"
            title={title}
            Icon={Plus}
            onClick={onAdd}
          />
        )}
      </div>
    </div>
  );
}

export default Control;
