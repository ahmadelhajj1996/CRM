import { Formik, Form } from "formik";
import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikToggle from "../forms/FormikToggle";
import FormikSelect from "../forms/FormikSelect";
import useCareers from "../../hooks/Data/useCareers";

export default function EmployeesForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
  departmentOptions,
}) {
  const { i18n } = useTranslation();

  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ values, submitForm, isSubmitting, setFieldValue }) => (
        <EmployeesFormFields
          values={values}
          submitForm={submitForm}
          isSubmitting={isSubmitting}
          setFieldValue={setFieldValue}
          isOpen={isOpen}
          onClose={onClose}
          modalMode={modalMode}
          isLoading={isLoading}
          departmentOptions={departmentOptions}
          i18n={i18n}
        />
      )}
    </Formik>
  );
}

// Split out so useCareers (a hook) can be called unconditionally,
// scoped to the currently selected department.
function EmployeesFormFields({
  values,
  submitForm,
  isSubmitting,
  setFieldValue,
  isOpen,
  onClose,
  modalMode,
  isLoading,
  departmentOptions,
  i18n,
}) {
  const { careerOptions } = useCareers({
    departmentId: values.department_id,
    i18n,
  });

  const prevDepartmentId = useRef(values.department_id);
  useEffect(() => {
    if (prevDepartmentId.current !== values.department_id) {
      setFieldValue("career_id", "");
      prevDepartmentId.current = values.department_id;
    }
  }, [values.department_id, setFieldValue]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={modalMode === "add" ? "Add Employee" : "Edit Employee"}
      showFooter={true}
      onConfirm={submitForm}
      isConfirmLoading={isSubmitting || isLoading}
    >
      <Form className="grid gap-y-3">
        <div className="grid md:grid-cols-2 gap-2">
          <FormikSelect
            name="department_id"
            label="Department :"
            options={departmentOptions}
            required={true}
          />
          <FormikSelect
            name="career_id"
            label="career :"
            options={careerOptions}
            required={true}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <FormikInput
            name="name"
            label="Name :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
          />
          <FormikInput
            name="email"
            label="email :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <FormikInput
            name="password"
            label="password :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
            type="password"
          />
          <FormikInput
            name="password_confirmation"
            label="password_confirmation :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
            type="password"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <FormikInput
            name="hire_date"
            label="hire_date :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
            type="date"
          />
          <FormikInput
            name="salary"
            label="salary :"
            placeholder=""
            prefix={<Mail size={18} color="gray" />}
            className="field"
            type="number"
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

        <FormikToggle
          name="is_active"
          label="Active"
          onLabel="Active"
          offLabel="Inactive"
        />
      </Form>
    </Modal>
  );
}
