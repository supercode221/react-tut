import React from "react";

const MainCard = ({ todo }) => {
  // Determine status color
  const statusColor =
    todo.status === "Not Started"
      ? "text-red-500"
      : todo.status === "In Progress"
      ? "text-blue-500"
      : "text-gray-700"; // Default color

  // Determine priority color
  const priorityColor =
    todo.priority === "Moderate" ? "text-sky-400" : "text-gray-700"; // Default color

  return (
    <div className="main-card-wrapper bg-transparent border-1 border-gray-400 rounded-xl pl-3 pt-1 pr-3 pb-2 w-fit mb-2.5">
      <div className="main-main-card flex gap-3">
        <div className="card-tag">
          <i className={`${statusColor} fa-regular fa-circle text-[13px]`}></i>
        </div>
        <div className="card-content mt-2">
          <div className="card-title line-clamp-2 overflow-hidden">
            <p className="font-bold text-[17px] max-w-60">{todo.title}</p>
          </div>
          <div className="card-preview flex">
            <div className="card-preview-text max-w-60 line-clamp-3 overflow-hidden">
              <p className="text-gray-500">{todo.previewText}</p>
            </div>
            <div className="card-preview-img">
              <img className="w-23 h-23 rounded-xl" src={todo.previewImg} />
            </div>
          </div>
          <div className="card-audit flex gap-2 text-[12px] max-w-90 mt-3">
            <p>
              Priority: <span className={priorityColor}>{todo.priority}</span>
            </p>
            <p>
              Status: <span className={statusColor}>{todo.status}</span>
            </p>
            <p className="text-gray-500">
              Created on: <span>{todo.createdOn}</span>
            </p>
          </div>
        </div>
        <div className="card-view">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
