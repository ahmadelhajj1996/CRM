import { Formik, Form } from "formik";
import { Mail } from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";
import { useTranslation } from "react-i18next";

export default function CategoryForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,

}) {

  const { t } =   useTranslation()

  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? t('add_income') : t('edit_income')  }
          size="md"
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid gap-y-12">

            <FormikInput
              name="amount"
              label={t('amount')}
              placeholder=""
              className="field"
              type="number"
            />

            <FormikInput
              type="textarea"
              name="description"
              label=  {t('description')}
              placeholder=""
              required={false}
              className="field"
            />
 
          </Form>
        </Modal>
      )}
    </Formik>
  );
}
