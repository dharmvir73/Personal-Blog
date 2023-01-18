const Blog = () => {
  return (
    <header>
      <nav className="bg-[#111827] py-[16px] px-[32px] flex justify-between items-center font-[poppins]">
        <h1 className="text-[2rem] text-[#00AAFF] p-0 font-normal text-center ">
          Veer Blogs
        </h1>
        <button className="px-[12px] py-[8px] text-white text-sm border-[1px] rounded-lg border-[#00AAFF] hover:bg-[#00aaff5d] hover:text-[#00AAFF]">
          Prefrences
        </button>
      </nav>
    </header>
  );
};

export default Blog;
