import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import "./index.css";

const Blog = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/blogs/${id}`
  );

  const article = data.data;

  console.log(article);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:(</p>;

  return (
    <>
      {article && (
        <div className="max-w-[1080px] mx-auto bg-[#111827] p-5">
          <article className="flex flex-col gap-1 pt-[20px] ">
            <h1 className="text-[2.5rem] font-bold text-white">
              {article.attributes.title}
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
