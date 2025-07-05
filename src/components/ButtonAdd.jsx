import React from "react";

const ButtonAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-3 px-4 inline-flex items-center gap-x-2 text-[12px]
      font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 
      hover:bg-blue-200 focus:outline-hidden focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none 
      dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
    >
      Thêm thông tin
    </button>
  );
};

export default ButtonAdd;
