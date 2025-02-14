import React from 'react';

const SidebarBox = ({ content, icon, type, isActive }) => {
  return (
    <button
      type="button"
      className={`${type} mb-2.5 cursor-pointer group flex gap-2 items-center p-4 w-70 rounded-xl transition duration-400 
        ${isActive ? 'bg-white text-[#FF5B5B]' : 'hover:bg-[#FF8383] text-white'}`}
    >
      <i
        className={`${icon} text-2xl transition-transform duration-400 
        ${isActive ? 'text-[#FF5B5B]' : 'text-white group-hover:scale-110'}`}
      ></i>
      <span className={`font-semibold ml-3 transition ${isActive ? 'text-[#FF5B5B]' : 'text-white'}`}>
        {content}
      </span>
    </button>
  );
};

export default SidebarBox;
