import Header from "../components/Header";
import imageCover from "../assets/image/imageCover.jpg"
import SearchByCategory from "../components/SearchByCategory";
const HomePage = () => {
  return ( 
    <>
    <Header/>
   <img className="w-full h-[700px]" src={imageCover} alt="..."/>
   <SearchByCategory/>
    </>
  );
};
export default HomePage;
