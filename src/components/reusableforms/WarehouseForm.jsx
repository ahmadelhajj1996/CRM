import { Formik, Form } from "formik";
import {
  Code,
  Home,
  Locate,
  Mail,
  Map,
  MapIcon,
  Notebook,
  PersonStanding,
  Phone,
} from "lucide-react";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";

export default function WarehouseForm({
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
          title={modalMode === "add" ? "Add Warehouse" : "Edit Warehouse"}
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className=" flex flex-col gap-6">
            <div className="grid md:grid-cols-2  gap-6">
              <FormikInput
                name="name"
                label="Name:"
                placeholder=""
                prefix={<PersonStanding size={18} color="gray" />}
                className="field"
              />

              <FormikInput
                name="email"
                label="Email:"
                placeholder=""
                prefix={<Mail size={18} color="gray" />}
                className="field"
              />
              <FormikInput
                name="phone"
                label="Phone:"
                placeholder=""
                type="number"
                prefix={<Phone size={18} color="gray" />}
                className="field"
              />
              <FormikInput
                name="address"
                label="address :"
                placeholder=""
                required={false}
                className="field"
                prefix={<MapIcon size={18} color="gray" />}

              />
            </div>

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
