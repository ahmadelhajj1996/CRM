import { Formik, Form } from "formik";
import { Mail, Plus } from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";
import FormikSelect from "../forms/FormikSelect";
export default function ProductForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  options
}) {
  
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add Product" : "Edit Product"}
          size="md"
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid gap-y-6">
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

            <FormikSelect
              name="status"
              label="Status"
              placeholder="Choose Status"
              options={options}
            />


            

            <div className="flex justify-between">
              <FormikToggle
                name="is_featured"
                label="Featured"
                onLabel="Featured"
                offLabel="Not Featured"
              />
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
