import { Formik, Form, FieldArray } from "formik";
import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikSelect from "../forms/FormikSelect";
import { Plus, Trash2 } from "lucide-react";

export default function SalesRFQForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  productoptions,
}) {
  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({
        values,
        submitForm,
        isSubmitting,
        setFieldValue,
      }) => (

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add Sale RFQ" : "Edit Sale RFQ"}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
          showActions={true}
        >

          <Form className="flex flex-col gap-6">

            <FormikInput
              name="days"
              label="Expiry after: (per days)"
              type="number"
              required={false}
            />


            <FieldArray name="items">

              {({ push, remove }) => (

                <div className="flex flex-col gap-y-6">

                  {values.items.map((item, index) => {


                    // Selected products except current row
                    const selectedProducts = values.items
                      .filter((_, i) => i !== index)
                      .map(item => item.product_id)
                      .filter(Boolean);


                    // Available options for this row
                    const availableOptions = productoptions.filter(
                      option =>
                        option.value === item.product_id ||
                        !selectedProducts.includes(option.value)
                    );


                    return (
                      <div
                        key={index}
                        className="
                        grid grid-cols-2 sm:grid-cols-3 
                        md:grid-cols-3 lg:grid-cols-6 
                        items-center gap-x-2 gap-y-4
                        "
                      >

                        <FormikSelect
                          name={`items.${index}.product_id`}
                          label="Product"
                          options={availableOptions}
                          required={true}

                          onChange={(value) => {

                            const duplicate =
                              values.items.some(
                                (row, i) =>
                                  i !== index &&
                                  row.product_id === value
                              );


                            if (duplicate) {

                              alert(
                                "This product is already selected"
                              );

                              setFieldValue(
                                `items.${index}.product_id`,
                                ""
                              );

                              return;
                            }


                            setFieldValue(
                              `items.${index}.product_id`,
                              value
                            );
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
                          label="Remarks"
                          required={false}
                        />


                        {index === values.items.length - 1 ? (

                          <div className="grid grid-cols-2 gap-x-2 col-span-2">


                            <button
                              type="button"
                              onClick={() => remove(index)}
                              disabled={
                                values.items.length === 1
                              }
                              className="
                              flex px-4 gap-x-4 items-center mt-6.5
                              py-2.5 rounded-md text-white 
                              bg-rose-500 cursor-pointer
                              disabled:opacity-50
                              "
                            >

                              <Trash2 size={14}/>

                              <span className="text-xs">
                                Remove
                              </span>

                            </button>



                            <button
                              type="button"
                              onClick={() =>
                                push({
                                  product_id: "",
                                  quantity: 1,
                                  estimated_price: 0,
                                  remarks: "",
                                })
                              }
                              className="
                              flex px-4 gap-x-4 items-center mt-6.5
                              py-2.5 rounded-md text-white
                              bg-blue-500
                              "
                            >

                              <Plus size={14}/>

                              <span className="text-xs">
                                Add
                              </span>

                            </button>


                          </div>


                        ) : (


                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="
                            flex px-4 gap-x-4 items-center mt-6.5
                            py-2.5 rounded-md text-white
                            bg-rose-500
                            "
                          >

                            <Trash2 size={14}/>

                            <span className="text-xs">
                              Remove
                            </span>

                          </button>


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