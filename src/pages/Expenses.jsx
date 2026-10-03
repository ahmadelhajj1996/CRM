// import useSettings from "../hooks/useSettings";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
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
import ExpenseForm from "../components/reusableforms/ExpenseForm";

function Categories() {
  const { t, i18n } = useTranslation();

  const { isOpen, modalMode, modalData, openModal, closeModal } = useModal();

  const {
    expenses_rows,
    expenses_total,
    expensesValues,
    handleSubmit,
    addItem,
    confirmOpen,
    handleDelete,
    closeConfirm,
    confirm,
  } = useTransactions({ modalMode, modalData, closeModal, i18n });

  // console.log("", incomes_rows);

  const { formikProps } = useForm({
    onSubmit: handleSubmit,
     initialValues :     expensesValues,
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
      <Breadcrumbs title={t("expense")} />

      <div className="mt-14 flex flex-col gap-y-6 md:ms-18 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Statistics
            items={[
              {
                icon: Users,
                title: expenses_total    ?? 0 + "   " + t("aed"),
                description: t("sum_expense"),
                type: "info",
              },
            ]}
          />
        </div>

        <Control
          // exportExcel={() => exportExcel()}
          // exportPdf={() => exportPDF()}
          onAdd={() => openModal("add")}
          title={t("add_expense")}
        />

        <div className="">
          <Table
            columns={categorycols}
            data={expenses_rows ?? []}
            rowsPerPage={10}
            actions={{ showView: false, showEdit: true, showDelete: true }}
            onEdit={(item) => openModal("edit", item)}
            onDelete={(row) => handleDelete(row)}
          />
        </div>{" "}

      </div>

      <ExpenseForm
        isOpen={isOpen}
        onClose={closeModal}
        modalMode={modalMode}
        formikProps={formikProps}
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
