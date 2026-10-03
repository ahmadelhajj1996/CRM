import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
      <main className="flex-1 overflow-y-auto px-4 ">
        <Outlet />
      </main>
  );
};

export default PublicLayout;