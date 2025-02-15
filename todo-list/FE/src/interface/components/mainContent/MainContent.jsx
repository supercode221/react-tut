import React from "react";
import MainCard from "../mainCard/MainCard";
import TodoContent from "../../todoContent/TodoContent";

const MainContent = () => {
  return (
    <div className="main-content-wrapper border-gray-400 border-1 p-7 rounded-xl shadow-xl">
      <div className="main-main-content flex">
        <div className="todo">
          <TodoContent date={"20 June"} />
        </div>
        <div className="other">
          <div className="task-progress"></div>
          <div className="completed"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
