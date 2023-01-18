const SearchBar = () => {
  return (
    <div className="flex flex-col gap-1 justify-center bg-[#111827]">
      <label
        htmlFor="search"
        className="text-white text-base font-bold w-[90%] self-center "
      >
        Search
      </label>
      <input
        id="search"
        name="Search"
        placeholder=""
        className="p-2 bg-slate-700 w-[90%] self-center text-white outline-white "
      />
    </div>
  );
};

export default SearchBar;
