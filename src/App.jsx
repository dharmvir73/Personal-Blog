import BlogList from "./components/BlogList";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="max-w-[1080px] mx-auto bg-[#111827]">
      <Nav />
      <SearchBar />
      <Tags />
      <BlogList />
    </div>
  );
}

export default App;
