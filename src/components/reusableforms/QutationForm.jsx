  import { Formik, Form, FieldArray } from "formik";
  import Modal from "../Modal";
  import FormikInput from "../forms/FormikInput";

  const isUnitPriceBelowCost = (item) => {
    const hasEnteredUnitPrice =
      item.unit_price !== "" &&
      item.unit_price !== undefined &&
      item.unit_price !== null;

    const hasLastUnitPrice =
      item.last_unit_price !== "" &&
      item.last_unit_price !== undefined &&
      item.last_unit_price !== null;

    if (!hasEnteredUnitPrice || !hasLastUnitPrice) return false;

    const unitPrice = Number(item.unit_price);
    const lastUnitPrice = Number(item.last_unit_price);

    return !isNaN(unitPrice) && unitPrice < lastUnitPrice;
  };

  export default function QutationForm({
    isOpen,
    onClose,
    modalMode,
    formikProps,
    isLoading,
  }) {
    return (
      <Formik {...formikProps} enableReinitialize={true}>
        {({ values, submitForm, isSubmitting }) => {
          const hasBelowCostItem = (values.items ?? []).some(
            isUnitPriceBelowCost,
          );

          return (
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              title={modalMode === "add" ? "Add Qutation " : "Edit Qutation "}
              onConfirm={submitForm}
              isConfirmLoading={isSubmitting || isLoading}
              isConfirmDisabled={hasBelowCostItem}
              showActions={true}
            >
              <Form className=" flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormikInput
                    name="issue_date"
                    label="Issue Date"
                    type="date"
                    disabled
                    required={false}
                  />

                  <FormikInput
                    name="valid_until"
                    label="Valid Until"
                    type="date"
                    disabled
                    required={false}
                  />
                </div>

                <FieldArray name="items">
                  {() => (
                    <div className="flex flex-col gap-5">
                      {(values.items ?? []).map((item, index) => {
                        const isBelowCost = isUnitPriceBelowCost(item);

                        return (
                          <div
                            key={index}
                            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-1 p-2 border rounded-lg ${
                              isBelowCost ? "border-red-400 bg-red-50" : ""
                            }`}
                          >
                            <FormikInput
                              name={`items.${index}.product_name`}
                              label="Product"
                              disabled
                              required={false}
                            />

                            <FormikInput
                              name={`items.${index}.available_quantity`}
                              label="Available Qty"
                              type="number"
                              disabled
                              required={false}
                            />
                            <FormikInput
                              name={`items.${index}.quantity`}
                              label="Requested Qty"
                              type="number"
                              disabled
                              required={false}
                            />
                            <FormikInput
                              name={`items.${index}.last_unit_price`}
                              label="Buy Price"
                              type="number"
                              disabled
                              required={false}
                            />

                            <div className="flex flex-col">
                              <FormikInput
                                name={`items.${index}.unit_price`}
                                label="Unit Price"
                                type="number"
                                required
                              />
                              {isBelowCost && (
                                <span className="text-xs text-red-600 mt-1">
                                  Below buy price ({item.last_unit_price})
                                </span>
                              )}
                            </div>

                            <FormikInput
                              name={`items.${index}.discount_amount`}
                              label="Discount"
                              type="number"
                            />

                            <FormikInput
                              name={`items.${index}.tax_amount`}
                              label="Tax"
                              type="number"
                            />

                            <div className="flex flex-col justify-end">
                              <label className="text-sm mb-1">Line Total</label>
                              <div className="border rounded px-3 py-2 bg-gray-50">
                                {(
                                  (Number(item.unit_price) || 0) *
                                    (Number(item.quantity) || 0) -
                                  (Number(item.discount_amount) || 0) +
                                  (Number(item.tax_amount) || 0)
                                ).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>

                {hasBelowCostItem && (
                  <p className="text-sm text-red-600 font-medium">
                    One or more items are priced below the last purchase price.
                    Please review before submitting.
                  </p>
                )}
              </Form>
            </Modal>
          );
        }}
      </Formik>
    );
  }
