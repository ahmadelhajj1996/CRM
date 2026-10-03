import { Routes, Route } from "react-router-dom";
import AuthenticatedLayout from "../layouts/authenticated";
import PublicLayout from "../layouts/public";
import ProtectedRoute from "../layouts/ProtectedRoute";

import Login from "../pages/Login";

import Home from "../pages/Home";
import Incomes from "../pages/Incomes";
import Expenses from "../pages/Expenses";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AuthenticatedLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
