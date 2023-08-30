<<<<<<< Updated upstream
const HomePage = () => {
    <p>
        Home Page Coming Soon...
    </p>
};
=======
import imageCover from "../assets/image/imageCover.jpg";
import SearchByCategory from "../components/searchByCtegory/SearchByCategory";

const HomePage = () => {
  return (
    <>
    
      <div className="relative">
        <img className="w-full h-[700px]" src={imageCover} alt="..." />
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <h1
            className="text-5xl font-semiBold text-white mb-4 font-serif"
          >
            BUY YOUR DREAM PHONE NOW !!!
          </h1>
          <button className="bg-white hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded-xl text-2xl shadow-slate-800">
            SHOP NOW
          </button>
        </div>
      </div>
      <SearchByCategory />
    </>
  );
};

>>>>>>> Stashed changes
export default HomePage;