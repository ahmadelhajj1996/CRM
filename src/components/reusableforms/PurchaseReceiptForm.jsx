import { Formik, Form, FieldArray } from "formik";

import Modal from "../Modal";

import FormikInput from "../forms/FormikInput";

export default function PurchaseReceiptForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ values, submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={
            modalMode === "add"
              ? "Add Purchase Receipt "
              : "Edit Purchase Receipt "
          }
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className=" flex flex-col gap-">
            <FieldArray name="items">
              <div className=" flex flex-col gap-y-12 md:gap-y-6">
                {values.items.map((item, index) => (
                  <div
                    key={index}
                    className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-x-4 md:gap-x-6 gap-y-4"
                  >
                    <FormikInput
                      name={`items.${index}.product`}
                      label="Product"
                      className=" disabled:cursor-not-allowed"
                      disabled
                      required={false}
                    />

                    <FormikInput
                      name={`items.${index}.ordered_quantity`}
                      label="ordered quantity"
                      className=" disabled:cursor-not-allowed"
                      disabled
                      required={false}
                    />

                    <FormikInput
                      name={`items.${index}.already_delivered`}
                      label="received quantity"
                      className=" disabled:cursor-not-allowed"
                      disabled
                      required={false}
                    />
                    <FormikInput
                      name={`items.${index}.remaining_quantity`}
                      label="remaining quantity"
                      className=" disabled:cursor-not-allowed"
                      disabled
                      required={false}
                    />
                    
                    <FormikInput
                      name={`items.${index}.quantity_received`}
                      label="received quantity"
                      disabled={
                        Number(values.items[index].remaining_quantity) === 0
                      }
                      type="number"
                    />
                  </div>
                ))}
              </div>
            </FieldArray>
          </Form>
        </Modal>
      )}
    </Formik>
  );
}
