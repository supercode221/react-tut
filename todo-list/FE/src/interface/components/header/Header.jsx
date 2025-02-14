import React from "react";
import Search from "../search/Search";

const Header = ({ halftitle1, halftitle2, date, day }) => {
  return (
    <div className="header-wrapper bg-[#F8F8F8] pt-5 pb-4 shadow-lg mb-20">
      <div className="header-main flex justify-around items-center">
        <div className="header-title">
          <p className="font-bold text-3xl"><span className="text-[#FF6767]">{halftitle1}</span>{halftitle2}</p>
        </div>
        <div className="header-search w-230">
          <Search />
        </div>
        <div className="header-other flex gap-15 items-center">
          <div className="header-services flex gap-5">
            <span className="pt-1.5 pb-1.5 pl-2.5 pr-2.5 bg-[#FF6767] rounded-lg group transition-transform duration-400 cursor-pointer">
              <i className="fa-regular fa-bell text-white transition-transform duration-300 group-hover:scale-120"></i>
            </span>
            <span className="pt-1.5 pb-1.5 pl-2.5 pr-2.5 bg-[#FF6767] rounded-lg group transition-transform duration-400 cursor-pointer">
              <i className="fa-solid fa-calendar-days text-white transition-transform duration-300 group-hover:scale-120 cursor-pointer"></i>
            </span>
          </div>
          <div className="header-date">
            <p className="font-bold">{day}</p>
            <p className="font-medium text-[#3ABEFF]">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
