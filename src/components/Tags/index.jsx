const Tags = () => {
  return (
    <div className="flex flex-col gap-1 justify-center bg-[#111827] py-5 ">
      <div className="w-[90%] self-center flex flex-wrap gap-5">
        <div className="w-[fit-content] border-[1px] text-white font-semibold flex justify-center items-center rounded-md">
          <div className="px-2 py-1 cursor-pointer hover:bg-[#00aaff5d] ">
            JavaScript
          </div>
          <div className="bg-slate-300 text-[#111827] h-[100%] px-2 py-1 rounded-r-sm">
            21
          </div>
        </div>

        <div className="w-[fit-content] border-[1px] text-white font-semibold flex justify-center items-center rounded-md">
          <div className="px-2 py-1 cursor-pointer hover:bg-[#00aaff5d]">
            React.JS
          </div>
          <div className="bg-slate-300 text-[#111827] h-[100%] px-2 py-1 rounded-r-sm">
            50
          </div>
        </div>

        <div className="w-[fit-content] border-[1px] text-white font-semibold flex justify-center items-center rounded-md">
          <div className="px-2 py-1 cursor-pointer hover:bg-[#00aaff5d]">
            CSS
          </div>
          <div className="bg-slate-300 text-[#111827] h-[100%] px-2 py-1 rounded-r-sm">
            12
          </div>
        </div>

        <div className="w-[fit-content] border-[1px] text-white font-semibold flex justify-center items-center rounded-md">
          <div className="px-2 py-1 cursor-pointer hover:bg-[#00aaff5d]">
            MongoDB
          </div>
          <div className="bg-slate-300 text-[#111827] h-[100%] px-2 py-1 rounded-r-sm">
            10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
