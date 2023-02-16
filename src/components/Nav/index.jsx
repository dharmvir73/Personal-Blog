import { useState } from "react";
import Switch from "../../common/switch";
import { Link } from "react-router-dom";
const Blog = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header className="relative">
      <nav className="bg-[#111827] py-[16px] px-[32px] flex justify-between items-center font-[poppins]">
        <h1 className="text-[2rem] text-[#00AAFF] p-0 font-normal text-center ">
          <Link to={"/"}>Veer Blog</Link>
        </h1>
        <button
          onClick={handleClick}
          className="px-[12px] py-[8px] text-white text-sm border-[1px] rounded-lg border-[#00AAFF] hover:bg-[#00aaff5d] hover:text-[#00AAFF]"
        >
          Prefrences
        </button>
        {toggle ? (
          <div className="flex justify-start items-center flex-col bg-white w-[180px] h-[42px] p-2 absolute right-[2rem] top-[5rem] z-10 rounded-lg">
            <div className="flex items-center ">
              <span className="mr-2 font-semibold text-[#111827]">
                Select Mode
              </span>
              <span>
                <Switch />
              </span>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Blog;
