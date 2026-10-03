import { Formik, Form } from "formik";
import { Mail } from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";
import FormikSelect from "../forms/FormikSelect";

export default function CareersForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  options,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add Career" : "Edit Career"}
          size="md"
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid gap-y-6">
            <FormikInput
              name="title"
              label="title :"
              placeholder=""
              prefix={<Mail size={18} color="gray" />}
              className="field"
            />
            <div className="flex gap-x-4">
              <FormikInput
                name={`min_salary`}
                label="Min Salary"
                type="number"
                required={false}
              />
              <FormikInput
                name={`max_salary`}
                label="Max Salary"
                type="number"
                required={false}
              />
            </div>

            <FormikInput
              type="textarea"
              name="description"
              label="Description :"
              placeholder=""
              required={false}
              className="field"
            />

            <div className="flex justify-between">
              <FormikToggle
                name="is_active"
                label="Active"
                onLabel="Active"
                offLabel="Inactive"
              />
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
}
