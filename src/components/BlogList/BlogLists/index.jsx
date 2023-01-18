const BlogLists = ({ title, date, tag, description }) => {
  return (
    <article className="flex flex-col gap-1 pt-[80px] ">
      <h1 className="text-[32px] font-bold text-white cursor-pointer decoration-[#00AAFF] decoration-6 underline-offset-1 hover:underline">
        {title}
      </h1>
      <h2 className="text-slate-300 ">{date}</h2>
      <label className=" w-[fit-content] px-[8px] py-[2px] text-white text-lg border-[1px] rounded-[5px] border-white">
        {tag}
      </label>
      <article className="text-lg mt-2 text-slate-300 font-medium">
        {description}
      </article>
      <a
        href="#"
        className="text-[#00AAFF] decoration-[#00AAFF] decoration-1 hover:underline outline-none"
      >
        Read More
      </a>
    </article>
  );
};

export default BlogLists;
