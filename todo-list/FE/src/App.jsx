import { useState } from "react";
import "./App.css";
import Header from "./interface/components/header/header";
import Sidebar from "./interface/components/side-bar/Sidebar";
import MainContentHeader from "./interface/components/mainContentHeader/MainContentHeader";
import MainContent from "./interface/components/mainContent/mainContent";
import MainCard from "./interface/components/mainCard/MainCard";

function App() {
  return (
    <div className="bg-[#ECECEC] min-h-screen">
      {/* Header */}
      <Header
        halftitle1={"Dash"}
        halftitle2={"board"}
        date={"14/02/2024"}
        day={"Thứ sáu"}
      />

      {/* Body Section */}
      <div className="body flex gap-10 w-full">
        {/* Sidebar */}
        <div className="w-80">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-10 pr-20">
          <MainContentHeader user={"Hoàng Anh"} />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;

