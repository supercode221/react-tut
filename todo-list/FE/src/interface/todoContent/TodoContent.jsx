import React from "react";
import MainCard from "../components/mainCard/MainCard";

const TodoContent = ({ date }) => {
  return (
    <div className="todo-wrapper w-fit rounded-xl shadow-xl p-5">
      <div className="todo-main">
        <div className="todo-header">
          <div className="header-top flex justify-between mb-3">
            <div className="header-top-left">
              <div className=" flex gap-2 items-center mb-1">
                <i className="fa-regular fa-hourglass text-[grey] text-[18px]"></i>
                <p className="text-[#FF6767] font-medium">To-do</p>
              </div>
              <p>
                {date} <span className="text-[grey]">• Today</span>
              </p>
            </div>
            <div className="header-top-right">
              <button
                className="flex gap-2 bg-transparent cursor-pointer group transition duration-300 items-center"
                type="button"
              >
                <span className="w-4 h-4 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-[#FF5B5B]">
                  <i className="fa-solid fa-plus text-[#FF5B5B] transition duration-300 group-hover:text-white"></i>
                </span>
                <p className="text-gray-500 transition duration-300 group-hover:text-[#FF5B5B]">
                  Add Task
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="todo-body">
          <MainCard
            todo={{
              status: "Not Started",
              title: "Attend Hoang Anh's Birthday Party",
              previewText:
                "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
              previewImg: "/avatar.jpg",
              priority: "Moderate",
              createdOn: "20/06/2023",
            }}
          />

          <MainCard
            todo={{
              status: "In Progress",
              title: "Attend Hoang Anh's Birthday Party",
              previewText:
                "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
              previewImg: "/avatar.jpg",
              priority: "Moderate",
              createdOn: "20/06/2023",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoContent;
