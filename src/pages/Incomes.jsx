import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";

// import { useTableExport } from "../hooks/useTableExport";

import Breadcrumbs from "../components/sections/Breadcrumbs";
import Statistics from "../components/Statistics";
import Control from "../components/Control";
import Table from "../components/Table";
import Confirm from "../components/Confirm";
import { categorycols } from "../utils/columns";
import { useModal } from "../hooks/useModal";
import { useForm } from "../hooks/useForm";
import useTransactions from "../hooks/Data/useTransactions";
import IncomeForm from "../components/reusableforms/IncomeForm";


function Categories() {
  const { t, i18n } = useTranslation();

  const { isOpen, modalMode, modalData, openModal, closeModal } = useModal();

  const {
    incomes_rows,
    incomes_total ,
    initialValues,
    handleSubmit,
    addItem,
    confirmOpen,
    handleDelete,
    closeConfirm,
    confirm,
  } = useTransactions({ modalMode, modalData, closeModal, i18n });

  console.log("", incomes_rows);

  const { formikProps } = useForm({
    onSubmit: handleSubmit,
    initialValues,
  });

  // const exportcolumns = categorycols?.filter((e) => e.export != false);

  // const { exportExcel, exportPDF } = useTableExport({
  //   fileName: "transactions",
  //   header: {
  //     logo: "/logo.png",
  //     title: "Categories Report",
  //   },
  //   sections: [
  //     {
  //       type: "table",
  //       columns: exportcolumns,
  //       data: filteredData ?? [],
  //     },
  //   ],
  //   notify: notify,
  // });
  return (
    <>
      <Breadcrumbs title={t("income")} />

      <div className="mt-14 flex flex-col gap-y-6 md:ms-18 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Statistics
            items={[
              {
                icon: Users,
                title: incomes_total + "   " + t("aed"),
                description: t("sum_income"),
                type: "info",
              },
            ]}
          />
        </div>

        <Control
          // exportExcel={() => exportExcel()}
          // exportPdf={() => exportPDF()}
          onAdd={() => openModal("add")}
          title={t("add_income")}
        />

        <div className="">
          <Table
            columns={categorycols}
            data={incomes_rows ?? []}
            rowsPerPage={10}
            actions={{ showView: false, showEdit: true, showDelete: true }}
            onEdit={(item) => openModal("edit", item)}
            onDelete={(row) => handleDelete(row)}
          />
        </div>
      </div>

      <IncomeForm
        isOpen={isOpen}
        formikProps={formikProps}
        onClose={closeModal}
        modalMode={modalMode}
        isLoading={addItem.isPending}
      />

      <Confirm
        isOpen={confirmOpen}
        title={"?"}
        note="You cant retreive this item!."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirm}
        onClose={closeConfirm}
        className=" bg-rose-500 hover:bg-rose-600"
      />
    </>
  );
}

export default Categories;

