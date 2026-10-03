import { useMemo } from "react";
import { usePost, useDeleteMutation, useGet } from "../useApi";
import notify from "../../utils/toastr";
import useConfirm from "../useConfirm";

export default function useTransactions({
  modalMode,
  modalData,
  closeModal,
  i18n,
}) {
  const {
    data: incomes = [],
    isFetched: incomesFetched,
    refetch: incomesRefetch,
  } = useGet(["incomes"], "incomes", {
    enabled: true,
    keepPreviousData: false,
    refetchOnMount: true,
    select: (response) => response || [],
  });

  const incomes_rows = useMemo(() => {
    return incomes?.data;
  }, [incomes]);

  const incomes_total = useMemo(() => {
    return incomes?.total_income;
  }, [incomes]);

  const {
    data: expenses = [],
    isFetched: expensesFetched,
    refetch: expensesRefetch,
  } = useGet(["expenses"], "expenses", {
    enabled: true,
    keepPreviousData: false,
    refetchOnMount: true,
    select: (response) => response || [],
  });

  const {
    data: summary = [],
    isFetched: summaryFetched,
    refetch: summaryRefetch,
  } = useGet(["summary"], "summary", {
    enabled: true,
    keepPreviousData: false,
    refetchOnMount: true,
    select: (response) => response || [],
  });

  const expenses_rows = useMemo(() => {
    return expenses?.data;
  }, [expenses]);

  const expenses_total = useMemo(() => {
    return expenses?.total_expense;
  }, [expenses]);

  const initialValues = useMemo(() => {
    const lang = i18n.language;
    if (modalMode === "edit" && modalData) {
      const { id, type, amount, description } = modalData;
      return {
        lang,
        id,
        type: type,
        amount: amount,
        description: description ?? "",
      };
    }
    return {
      lang,
      type: "income",
      amount: 0,
      description: "",
    };
  }, [modalMode, modalData, i18n]);

  const expensesValues = useMemo(() => {
    const lang = i18n.language;
    if (modalMode === "edit" && modalData) {
      const { id, type, amount, description } = modalData;
      return {
        lang,
        id,
        type: type,
        amount: amount,
        description: description ?? "",
      };
    }
    return {
      lang,
      type: "expense",
      amount: 0,
      description: "",
    };
  }, [modalMode, modalData, i18n]);

  const addItem = usePost({
    invalidateQueries: ["transactions"],
    onSuccess: async () => {
      notify("done", "success", i18n.language);
      await incomesRefetch();
      await expensesRefetch();
    },
    onError: () => {
      notify("something went wrong!", "error", i18n.language);
    },
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const request =
        modalMode === "add"
          ? addItem.mutateAsync({
              url: "/transactions",
              data: values,
            })
          : addItem.mutateAsync({
              url: `/transactions/${modalData.id}`,
              data: { ...values, _method: "PUT" },
            });

      await request;

      closeModal();
      resetForm();
    } catch (error) {
      console.error("Submission error:", error.response);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteItem = useDeleteMutation({
    invalidateQueries: ["transactions"],
    onSuccess: async () => {
      notify("done", "success", i18n.language);
      await incomesRefetch();
      await expensesRefetch();
    },
    onError: () => {
      notify("something went wrong!", "error", i18n.language);
    },
  });

  const { confirmOpen, openConfirm, closeConfirm, confirm } = useConfirm(
    async (deletedItem) => {
      try {
        await deleteItem.mutateAsync({
          url: `/transactions/${deletedItem.id}`,
          id: deletedItem.id,
        });
        closeConfirm();
      } catch (error) {
        console.error(error);
      }
    },
  );

  const handleDelete = (row) => {
    if (row.products_count > 0) {
      notify("this category has products", "warning");
    } else openConfirm(row);
  };

  return {
    incomes,
    incomes_rows,
    incomes_total,
    incomesFetched,
    incomesRefetch,
    expenses,
    expenses_rows,
    expenses_total,
    expensesFetched,
    expensesRefetch,
    summary,
    summaryFetched,
    summaryRefetch,
    initialValues,
    expensesValues,
    handleSubmit,
    addItem,

    handleDelete,
    confirmOpen,
    openConfirm,
    closeConfirm,
    confirm,
  };
}
