import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import notify from "../../utils/toastr";

export default function AuthExpiryHandler() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, expiresAt } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token || !expiresAt) {
      return;
    }

    const remainingTime = expiresAt - Date.now();

    // Token has already expired
    if (remainingTime <= 0) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");

      dispatch(logout());
      navigate("/login", { replace: true });

      return;
    }

    const timer = setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");

      dispatch(logout());
      navigate("/login", { replace: true });
      notify("Your session has expired. Please login again.", "warning");
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [token, expiresAt, dispatch, navigate]);

  return null;
}
