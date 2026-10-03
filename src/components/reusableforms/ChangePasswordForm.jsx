import FormikInput from "../forms/FormikInput";
import { Form, Formik } from "formik";
import Modal from "../Modal";
import { EyeIcon, EyeOff, Key } from "lucide-react";
import { useState } from "react";

function ChangePasswordForm({ isOpen, onClose, formikProps }) {
  const [showPassword, setShowPassword] = useState({
    current_password: false,
    new_password: false,
    new_password_confirmation: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
      <Formik {...formikProps} enableReinitialize={true}>
        {({ submitForm, isSubmitting }) => (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={"Change Password"}
            size="sm"
            showFooter={true}
            onConfirm={submitForm}
            isConfirmLoading={isSubmitting}
          >
            <Form className="grid gap-y-10">
              <FormikInput
                name="current_password"
                label="Current Password :"
                type={showPassword.current_password ? "text" : "password"}
                prefix={<Key size={18} color="gray" />}
                className="field"
                postfix={
                  showPassword.current_password ? (
                    <EyeOff size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )
                }
                onClickPostfix={() => togglePassword("current_password")}
              />
              <FormikInput
                name="new_password"
                label="New Password :"
                type={showPassword.new_password ? "text" : "password"}
                prefix={<Key size={18} color="gray" />}
                className="field"
                postfix={
                  showPassword.new_password ? (
                    <EyeOff size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )
                }
                onClickPostfix={() => togglePassword("new_password")}
              />
              <FormikInput
                name="new_password_confirmation"
                label="New Password Confirmation :"
                type={
                  showPassword.new_password_confirmation ? "text" : "password"
                }
                prefix={<Key size={18} color="gray" />}
                className="field"
                postfix={
                  showPassword.new_password_confirmation ? (
                    <EyeOff size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )
                }
                onClickPostfix={() =>
                  togglePassword("new_password_confirmation")
                }
              />
            </Form>
          </Modal>
        )}
      </Formik>
    </>
  );
}

export default ChangePasswordForm;
