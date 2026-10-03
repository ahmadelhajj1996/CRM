import { Formik, Form } from "formik";
import { DollarSign, Mail } from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";

export default function AdvancesForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add Advance" : "Edit Advance"}
          size="md"
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid gap-y-12">
            <FormikInput
              name="amount"
              label="amount :"
              placeholder=""
              prefix={<DollarSign size={18} color="gray" />}
              className="field"
              type="number"
            />

            <FormikInput
              type="textarea"
              name="reason"
              label="reason :"
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
