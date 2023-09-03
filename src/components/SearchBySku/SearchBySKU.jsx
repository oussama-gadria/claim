import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_QUERY } from "../../graphqlFiles/query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBySKU = () => {
  const { data } = useQuery(GET_CATEGORIES_QUERY);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if(data)
    setCategories(data.categoryList[0].children);
  }, [data]);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row items-center pt-9 pb-4">
          <p className="font-extrabold text-blue text-[40px]">Search Products By</p>
          <p className="pl-1 font-extrabold  text-[40px]">SKU</p>
        </div>
        <div className="flex flex-row  justify-around">
          {categories.map((categorie) => (
            <Link to={`/category/${categorie.name}/${categorie.uid}`}>
              <div className="flex  flex-col basis-1/6 items-center bg-white rounded-lg overflow-hidden shadow-lg mr-7 mb-14">
                <div className="aspect-ratio-container">
                  <img
                    alt="Bonsai"
                    src="https://sfractus-images.cleo.media/unsafe/0x127:736x541/2000x0/images/Google-Pixel-Fold-8925.jpg"
                  />
                </div>
                <a href="/#" className="text-lg mt-6 mb-2 font-bold">
                  {categorie.name}
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchBySKU;
