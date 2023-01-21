import { Link } from "react-router-dom";

const BlogLists = ({
  blog: {
    id,
    attributes: { title, date, tags, description },
  },
}) => {
  const addSpaces = (str) => {
    var viewport_width = window.innerWidth;
    if (viewport_width > 640) {
      return str;
    }

    if (viewport_width < 640) {
      let result = [];
      for (let i = 0; i < str.length; i += 19) {
        result.push(str.slice(i, i + 19));
      }
      return result.join(" ");
    }
  };

  return (
    <article className="flex flex-col gap-1 pt-[80px] ">
      <Link to={`blog/${id}`}>
        <h1 className="text-[32px] font-bold text-white cursor-pointer decoration-[#00AAFF] decoration-6 underline-offset-1 hover:underline">
          {addSpaces(title)}
        </h1>
      </Link>
      <h2 className="text-slate-300 ">{date}</h2>
      <label className=" w-[fit-content] px-[8px] py-[2px] text-white text-lg border-[1px] rounded-[5px] border-white">
        {tags}
      </label>
      <article className="text-lg mt-2 text-slate-300 font-medium">
        {description.substring(0, 200)}
      </article>
      <Link
        to={`blog/${id}`}
        className="text-[#00AAFF] decoration-[#00AAFF] decoration-1 hover:underline outline-none"
      >
        Read More
      </Link>
    </article>
  );
};

export default BlogLists;
