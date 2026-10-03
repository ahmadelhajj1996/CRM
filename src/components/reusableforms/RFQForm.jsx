import { Formik, Form, FieldArray } from "formik";
import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikSelect from "../forms/FormikSelect";
import { Plus, Trash2 } from "lucide-react";

export default function RFQForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  supplieroptions,
  warehouseoptions,
  productoptions,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ values, submitForm, isSubmitting, setFieldValue }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add PurchaseRFQ " : "Edit PurchaseRFQ "}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
          showActions={true}
        >
          <Form className=" flex flex-col gap-6">
            <div className="grid md:grid-cols-2  gap-2 gap-y-6">
              <FormikSelect
                name="supplier_ids"
                label="Suppliers : (multiple)"
                options={supplieroptions}
                required={true}
                multiple
              />
              <FormikSelect
                name="warehouse_id"
                label="Warehouse :"
                options={warehouseoptions}
                required={true}
              />
              <FormikInput
                name="days"
                label="Expiry after: (days)"
                type="number"
                required={false}
              />
            </div>
            <FieldArray name="items">
              {({ push, remove }) => (
                <div className=" flex flex-col gap-y-6">
                  {values.items.map((item, index) => {
                    const selectedProducts = values.items
                      .filter((_, i) => i !== index)
                      .map((item) => item.product_id)
                      .filter(Boolean);

                    const availableOptions = productoptions.filter(
                      (option) =>
                        option.value === item.product_id ||
                        !selectedProducts.includes(option.value),
                    );

                    return (
                      <div
                        key={index}
                        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center gap-x-2 gap-y-4"
                      >
                        <FormikSelect
                          name={`items.${index}.product_id`}
                          label="Product"
                          options={availableOptions}
                          required={true}
                          onChange={(value) => {
                            const duplicate = values.items.some(
                              (row, i) =>
                                i !== index && row.product_id === value,
                            );

                            if (duplicate) {
                              alert("This product is already selected");

                              setFieldValue(`items.${index}.product_id`, "");

                              return;
                            }

                            setFieldValue(`items.${index}.product_id`, value);
                          }}
                        />

                        <FormikInput
                          name={`items.${index}.quantity`}
                          label="Quantity"
                          type="number"
                          required={true}
                        />

                        <FormikInput
                          name={`items.${index}.estimated_price`}
                          label="Estimated Price"
                          type="number"
                          required={false}
                        />

                        <FormikInput
                          name={`items.${index}.remarks`}
                          label="remarks"
                          required={false}
                        />
                        {index === values.items.length - 1 ? (
                          <div className="grid grid-cols-2 gap-x-2">
                            <button
                              onClick={() => remove(index)}
                              className=" flex px-4 gap-x-4 items-center mt-6.5  py-2.5 rounded-md 
                            text-white bg-rose-500 cursor-pointer  disabled:cursor-not-allowed"
                              disabled={values.items.length == 1}
                            >
                              <Trash2 size={14} />
                              <span className="  pb-0.5 text-xs">remove</span>
                            </button>
                            <div
                              onClick={() =>
                                push({
                                  product_id: "",
                                  quantity: 1,
                                  unit_price: 0,
                                  discount_amount: 0,
                                  tax_amount: 0,
                                })
                              }
                              className=" flex px-4 gap-x-4 items-center mt-6.5  py-2.5 rounded-md text-white bg-blue-500"
                            >
                              <Plus size={14} />
                              <span className="  pb-0.5 text-xs">Add</span>
                            </div>
                          </div>
                        ) : (
                          <div
                            onClick={() => remove(index)}
                            className=" flex px-4 gap-x-4 items-center mt-6.5  py-2.5 rounded-md text-white bg-rose-500"
                          >
                            <Trash2 size={14} />
                            <span className="  pb-0.5 text-xs">remove</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
          </Form>
        </Modal>
      )}
    </Formik>
  );
}
