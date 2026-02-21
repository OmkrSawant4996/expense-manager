import { NavLink } from "react-router-dom";
import wallet from "../images/wallet.png";

const SideBar = () => {
  return (
    <div className=" flex h-screen flex-col px-4 py-5 border-r border-gray-700">
      {/* Header */}
      <header className="mb-10 pb-4 border-b border-gray-700 flex items-center">
        <img
          src={wallet}
          alt="Wallet logo"
          className="w-10 h-10 object-contain"
        />

        <div className="flex flex-col ml-3">
          <span className="text-white font-bold text-2xl">WealthWise</span>
          <span className="text-gray-400 text-sm">Expense Manager</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 text-white">
        <NavLink
          to="/main/dashboard"
          className={({ isActive }) =>
            `w-60 h-10 rounded-xl flex items-center duration-200
    ${isActive ? "bg-gray-200/15" : "hover:bg-emerald-600/15 text-white"}`
          }
        >
          <span className="ml-5">Dashboard</span>
        </NavLink>

        <NavLink
          to="/main/expenses"
          className={({ isActive }) =>
            `w-60 h-10 rounded-xl flex items-center duration-200
    ${isActive ? "bg-gray-200/15" : "hover:bg-emerald-600/15 text-white"}`
          }
        >
          <span className="ml-5">Expenses</span>
        </NavLink>

        <NavLink
          to="/main/settings"
          className={({ isActive }) =>
            `w-60 h-10 rounded-xl flex items-center duration-200
    ${isActive ? "bg-gray-200/15" : "hover:bg-emerald-600/15 text-white"}`
          }
        >
          <span className="ml-5">Settings</span>
        </NavLink>
      </main>

      {/* Footer */}
      <footer className="text-gray-400 text-sm mt-6">© 2026 WealthWise</footer>
    </div>
  );
};

export default SideBar;
