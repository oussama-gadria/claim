import GlassSearchSvg from "../../assets/svg/GlassSearchSvg";

const SearchForm = () => {
  return (
    <div className="my-2">
      <form>
        <div className="relative">
          <GlassSearchSvg />
          <input
            type="search"
            id="default-search"
            className="h-[35px] w-full md:w-[150px] pl-14 text-gray-900 text-xs rounded-lg bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue"
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
