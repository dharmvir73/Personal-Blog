import BlogLists from "./BlogLists";

const BlogList = ({ data, error, loading }) => {
  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:(</p>;

  const articles = data;

  return (
    <div className="flex flex-col ">
      <div className="w-[90%] self-center">
        {articles &&
          articles.map((article) => (
            <BlogLists key={article.id} blog={article} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
