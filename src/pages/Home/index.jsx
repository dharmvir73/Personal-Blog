import SearchBar from "../../components/SearchBar";
import Tags from "../../components/Tags";
import BlogLists from "../../components/BlogList";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, error, loading } = useFetch("https://blog-strapi-4h73.onrender.com/api/blogs/");

  const addElements = data.data;

  const [recivedData, setRecivedData] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setRecivedData(addElements);
    }
  }, [loading, data]);

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  };

  useEffect(() => {
    if (data && recivedData) {
      const filterData = recivedData.filter((item) => {
        return item.attributes.tags.toLowerCase().includes(query.toLowerCase());
      });
      console.log(filterData.map((i) => i));
      setRecivedData(filterData);

      if (query == "") {
        setRecivedData(addElements);
      }
    }
  }, [query, data]);

  console.log(query);

  return (
    <>
      <SearchBar handleChange={handleChange} query={query} />
      <Tags />
      <BlogLists data={recivedData} error={error} loading={loading} />
    </>
  );
};

export default Home;
