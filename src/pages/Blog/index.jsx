import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import "./index.css";
import Loader from "../../common/loader";

const Blog = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://blog-strapi-4h73.onrender.com/api/blogs/${id}`
  );

  const article = data.data;

  console.log(article);

  const addSpaces = (str) => {
    var viewport_width = window.innerWidth;
    if (viewport_width > 640) {
      return str;
    }

    if (viewport_width < 640) {
      let result = [];
      for (let i = 0; i < str.length; i += 17) {
        result.push(str.slice(i, i + 17));
      }
      return result.join(" ");
    }
  };

  if (loading)
    return (
      <div className="flex w-[90%] h-[80vh] justify-center items-center ">
        <Loader />
      </div>
    );
  if (error) return <p>Error:(</p>;

  return (
    <>
      {article.attributes.title && (
        <div className="max-w-[1080px] mx-auto bg-[#111827] p-5">
          <article className="flex flex-col gap-1 pt-[20px] ">
            <h1 className="text-[2.5rem] font-bold text-white">
              {addSpaces(article.attributes.title)}
            </h1>
            <h2 className="text-slate-300 ">{article.attributes.date}</h2>
            <label className=" w-[fit-content] px-[8px] py-[2px] text-white text-lg border-[1px] rounded-[5px] border-white">
              {article.attributes.tags}
            </label>
            <div
              className="text-lg mt-2 text-slate-300 font-medium"
              id="article"
            >
              <ReactMarkdown children={article.attributes.article} />
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Blog;
