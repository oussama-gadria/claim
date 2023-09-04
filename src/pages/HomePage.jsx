import imageCover from "../assets/image/imageCover.jpg";
import SearchByCategory from "../components/searchByCtegory/SearchByCategory";
import iphone from "../assets/image/iPhone14.jpg";
import samsung from "../assets/image/samsung.jpg";
import Discount from "../components/discount/Discount";
import SearchBySKU from "../components/SearchBySku/SearchBySKU";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row pt-12">
        <div className="relative pr-4 pt-8">
          <img
            className="w-full h-[700px] rounded-3xl shadow-2xl "
            src={imageCover}
            alt="..."
          />
          <div className="flex flex-col items-center justify-center absolute inset-0">
            <h1 className="text-3xl font-semiBold text-white mb-4 font-serif">
              BUY YOUR DREAM PHONE NOW !!!
            </h1>
            <button className="bg-white hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded-xl text-2xl shadow-slate-800">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative  pt-8 flex flex-col">
          <div>
            <img
              className="w-full h-[350px] rounded-3xl pb-2 "
              src={iphone}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-full h-[350px] rounded-3xl pt-2 shadow-2xl"
              src={samsung}
              alt="..."
            />
          </div>
        </div>
      </div>
      <SearchByCategory />
      <SearchBySKU />
      <Discount />
    </>
  );
};

export default HomePage;
