import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="max-w-[1080px] mx-auto bg-[#111827]">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
