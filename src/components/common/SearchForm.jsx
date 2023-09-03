import GlassSearchSvg from "../../assets/svg/GlassSearchSvg";

const SearchForm = () => {
  return (
    <div className="my-2">
      <form>
        <div className="relative">
          <GlassSearchSvg />
          <input
            type="search product"
            id="default-search"
            className="h-[40px] w-full md:w-[400px] pl-14 text-gray-900 text-xl rounded-lg bg-gray-50 border-2 border-blue "
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
