import { useState } from "react";

const TagsList = ({ language, amount }) => {
  return (
    <div className="w-[fit-content] border-[1px] text-white font-semibold flex justify-center items-center rounded-md">
      <div className="px-2 py-1 cursor-pointer hover:bg-[#00aaff5d] ">
        {language}
      </div>
      <div className="bg-slate-300 text-[#111827] h-[100%] px-2 py-1 rounded-r-sm">
        {amount}
      </div>
    </div>
  );
};

export default TagsList;
