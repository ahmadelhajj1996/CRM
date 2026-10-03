import { Form, Formik } from "formik";
import background from "../assets/background.png";
import Logo from "../assets/Logo.png";

import Button from "../components/forms/Button";
import { useForm } from "../hooks/useForm";
import useAuth from "../hooks/Data/useAuth";
import FormikInput from "../components/forms/FormikInput";
import { EyeIcon, EyeOff, Key, Mail } from "lucide-react";
import { useState } from "react";
import { loginSchema } from "../utils/validator";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const closeModal = () => {};
  const { initialValues, login } = useAuth({ closeModal });

  const { formikProps } = useForm({
    onSubmit: login,
    initialValues,
    validationSchema: loginSchema,
  });

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center"

      >
        <div className="w-full bg-white p-4  sm:p-10 py-8 mx-4    rounded-xl shadow-lg max-w-md">
          <div className="flex flex-col flex-1">
            <div className="flex flex-col  justify-center gap-y-6 flex-1 w-full max-w-md mx-auto">
              <img src={Logo} alt="" className=" w-[30%] h-[50px] mx-auto " />
              <Formik {...formikProps} enableReinitialize={true}>
                <Form className="grid gap-y-6">
                  <FormikInput
                    name="email"
                    label="Email :"
                    placeholder=""
                    prefix={<Mail size={18} />}
                    className="field"
                  />

                  <FormikInput
                    name="password"
                    label="Password :"
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    prefix={<Key size={18} />}
                    postfix={
                      showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <EyeIcon size={18} />
                      )
                    }
                    className="field"
                    onClickPostfix={() => setShowPassword(!showPassword)}
                  />
                  <Button
                    className="  mt-4 text-[16px]   font-bold      rounded-md text-white  gradient-bg tracking-widest   cursor-pointer focus:outline-0   "
                    title={"Login"}
                  />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
