import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BlogData from "./BlogData";

const Blog = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://blog-strapi-4h73.onrender.com/api/blogs/${id}`
  );

  return <BlogData data={data} loading={loading} error={error} />;
};

export default Blog;
