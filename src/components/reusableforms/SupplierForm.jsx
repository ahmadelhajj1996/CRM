import { Formik, Form } from "formik";
import { Code, Home, Mail, Notebook, PersonStanding } from "lucide-react";
import { Country, City } from "country-state-city";

import Modal from "../Modal";
import FormikInput from "../forms/FormikInput";
import FormikSelect from "../forms/FormikSelect";
import FormikToggle from "../forms/FormikToggle";
import FormikPhoneInput from "../forms/FormikPhoneInput";
import { useState } from "react";

export default function SupplierForm({
  isOpen,
  onClose,
  modalMode,
  formikProps,
  isLoading,
}) {
  const countries = Country.getAllCountries();

  const [cities, setCities] = useState([]);

  const handleCountryChange = (countryCode, setFieldValue) => {
    console.log("Selected country:", countryCode);

    setFieldValue("country", countryCode);

    

    const cities = City.getCitiesOfCountry(countryCode);
    console.log("Cities:", cities);
    setCities(cities);

    // reset city
    setFieldValue("city", "");
  };

  return (
    <Formik {...formikProps} enableReinitialize={true}>
      {({ submitForm, isSubmitting, setFieldValue }) => (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={modalMode === "add" ? "Add Supplier" : "Edit Supplier"}
          showFooter={true}
          onConfirm={submitForm}
          isConfirmLoading={isSubmitting || isLoading}
        >
          <Form className="grid md:grid-cols-2  gap-6">
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

            <FormikSelect
              name="country"
              options={countries.map((country) => ({
                label: country.name,
                value: country.isoCode,
              }))}
              onChange={(value) => {
                handleCountryChange(value, setFieldValue);
              }}
            />
            <FormikSelect
              name="city"
              options={cities.map((city) => ({
                label: city.name,
                value: city.name,
              }))}
            />

            <FormikPhoneInput
              name="phone"
              label="Phone:"
              className="field"
              countryFieldName="country"
              cityFieldName="city"
            />

            <FormikInput
              name="tax_number"
              label="Tax number:"
              placeholder=""
              type="number"
              prefix={<Code size={18} color="gray" />}
              className="field"
            />

            <FormikInput
              name="contact_person"
              label="contact person:"
              placeholder=""
              prefix={<PersonStanding size={18} color="gray" />}
              className="field"
            />
            <FormikInput
              name="notes"
              label="notes :"
              placeholder=""
              required={false}
              prefix={<Notebook size={18} color="gray" />}
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
