import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

export default function AdminPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
