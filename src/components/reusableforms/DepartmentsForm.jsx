import { Formik, Form } from "formik";
import { Mail } from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";

export default function DepartmentsForm({
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
          title={modalMode === "add" ? "Add Department" : "Edit Department"}
          size="md"
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid gap-y-12">
            <FormikInput
              name="name"
              label="Name :"
              placeholder=""
              prefix={<Mail size={18} color="gray" />}
              className="field"
            />

            <FormikInput
              type="textarea"
              name="description"
              label="Description :"
              placeholder=""
              required={false}
              className="field"
            />

            <FormikToggle
              name="is_active"
              label="Active"
              onLabel="Active"
              offLabel="Inactive"
            />
          </Form>
        </Modal>
      )}
    </Formik>
  );
}
