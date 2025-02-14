import React from "react";
import SidebarBox from "../sidebarbox/SidebarBox";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper bg-[#FF5B5B] w-80 max-h-[calc(100vh-164px)] min-h-[calc(100vh-164px)] rounded-tr-lg relative flex flex-col items-center shadow-lg">
      {/* Avatar Positioned at Top */}
      <div className="user-avatar absolute -top-15 flex justify-center">
        <img className="w-30 h-30 rounded-full border-4 border-white shadow-lg" src="/avatar.jpg" />
      </div>

      {/* User Info */}
      <div className="user-content mt-20 flex flex-col items-center text-white">
        <p className="text-lg font-semibold">Hoàng Anh</p>
        <p className="text-sm">hoanganh220104@gmail.com</p>
      </div>

      {/* Navigation Menu */}
      <div className="sidebar-nav mt-6 w-full px-4">
        <SidebarBox content={"Dashboard"} icon={"fa-solid fa-border-all"} type={"nav-dashboard"} isActive={true} />
        <SidebarBox content={"Vital Task"} icon={"fa-solid fa-exclamation"} type={"nav-dashboard"} isActive={false} />
        <SidebarBox content={"My Task"} icon={"fa-solid fa-square-check"} type={"nav-dashboard"} isActive={false} />
        <SidebarBox content={"Task Categories"} icon={"fa-solid fa-list"} type={"nav-dashboard"} isActive={false} />
        <SidebarBox content={"Settings"} icon={"fa-solid fa-gear"} type={"nav-dashboard"} isActive={false} />
        <SidebarBox content={"Help"} icon={"fa-solid fa-circle-question"} type={"nav-dashboard"} isActive={false} />
      </div>
    </div>
  );
};

export default Sidebar;
