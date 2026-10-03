import { useMemo } from "react";
import notify from "../../utils/toastr";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function useAuth({ closeModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const initialValues = useMemo(() => {
    return {
      email: "",
      password: "",
    };
  }, []);

  const login = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        values,
      );
      const expiresAt = Date.now() + response.data.expires_in * 1000;

      dispatch(
        setCredentials({
          token: response.data.access_token,
          admin: response.data.user,
          expiresAt,
        }),
      );
      localStorage.setItem("token", response.data.access_token);

      localStorage.setItem("expiresAt", expiresAt.toString());

      navigate("/");
      notify("Logged in", "success");

      resetForm();
    } catch (error) {
      notify("Email or password are incorrect!", error.response.data);
    }
  };

  const signout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/admin/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(logout());

      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");

      navigate("/login");

      notify("Logged out", "success");
    } catch (error) {
      notify("Something went wrong!", "error");

      console.error("Logout error:", error.message);
    }
  };

  const changePasswordValues = useMemo(() => {
    return {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    };
  }, []);

  const changePassword = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/change-password",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response);
      navigate("/login");
      notify("Password changed Successfully", "success");
      localStorage.clear();
    } catch (error) {
      console.log(error.response.data);
      notify("Something Went wrong!", error.response.data);
    }
  };

  return {
    initialValues,
    login,
    signout,
    changePasswordValues,
    changePassword,
  };
}
