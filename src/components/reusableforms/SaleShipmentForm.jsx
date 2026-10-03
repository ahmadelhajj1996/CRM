import { Formik, Form, FieldArray } from "formik";

import Modal from "../Modal";

import FormikInput from "../forms/FormikInput";
import FormikSelect from "../forms/FormikSelect";

export default function SaleShipmentForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  wa,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ values, submitForm, isSubmitting }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={
            modalMode === "add" ? "Add Sale Shipment " : "Edit Sale Shipment "
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
                      name={`items.${index}.already_shipped`}
                      label="Already Shipped"
                      className=" disabled:cursor-not-allowed"
                      disabled
                      required={false}
                    />

                    <FormikSelect
                      name={`items.${index}.warehouse_id`}
                      label="Warehouse"
                      options={values.items[index].warehouses.map(
                        (warehouse) => ({
                          value: warehouse.warehouse_id,
                          label: `${warehouse.warehouse.en} ( ${warehouse.quantity} )` , 
                        }),
                      )}
                      required
                    />

                    <FormikInput
                      name={`items.${index}.quantity_shipped`}
                      label="shipped quantity (now)"
                      disabled={
                        Number(values.items[index].remaining_quantity) === 0
                      }
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
