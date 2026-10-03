import { Outlet } from "react-router-dom";
import Sidebar from "../components/sections/Sidebar";
import Navbar from "../components/sections/Navbar";
import { sidebaritems } from "../config/constants";
import { useSidebar } from "../hooks/useSidebar";
import { useState } from "react";

const AuthenticatedLayout = () => {
  const { currentLink, handleChange } = useSidebar();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

   

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 ">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={sidebaritems}
          currentLink={currentLink}
          onChange={handleChange}
        />
        <main className="flex-1  overflow-y-auto bg-gray-100 omd:ms-12">
          <Navbar onToggleSidebar={toggleSidebar} />
          <div className=" mt-[68px]    p-4   ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
