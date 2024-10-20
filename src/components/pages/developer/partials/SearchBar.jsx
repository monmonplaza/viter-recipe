import { setIsSearch } from "@/components/store/StoreAction";
import { Search } from "lucide-react";

const SearchBar = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
  isFilter = false,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
    if (isFilter === true) {
      dispatch(setIsSearch(true));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      dispatch(setError(true));
      dispatch(setMessage("Search keyword cannot be space only or blank."));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search-box w-full md:w-auto"
    >
      <div className="input-wrap search relative w-full md:w-auto">
        <div
          type="submit"
          className="absolute left-1 top-1.5 text-[14px] cursor-default"
        >
          <Search size={20} strokeWidth={1.5} className="opacity-20" />
        </div>
        <input
          type="search"
          placeholder="Search here..."
          className="!pl-8"
          ref={search}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
