import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_QUERY } from "../../graphqlFiles/query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchByCategory = () => {
  const { data } = useQuery(GET_CATEGORIES_QUERY);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if(data)
    setCategories(data.categoryList[0].children);
  }, [data]);
  return (
    <>
      <div className="container mx-auto pt-16">
        <div className="flex flex-row items-center pt-9 pb-4">
          <p className="font-extrabold text-blue text-[40px]">Search Products By</p>
          <p className="pl-1 font-extrabold  text-[40px]">Category</p>
        </div>
        <div className="grid grid-cols-4 ">
          {categories.map((categorie) => (
            <Link to={`/category/${categorie.name}/${categorie.uid}`}>
              <div className="items-center bg-white rounded-lg overflow-hidden shadow-lg mr-7 mb-14">
                <div className="aspect-ratio-container">
                  <img
                    alt="Bonsai"
                    src="https://s.isanook.com/hi/0/ui/304/1520585/023_galaxys21_ultra_s21plus_lifestyle_RAN.jpg"
                  />
                </div>
                <p className="text-center text-lg py-6 font-bold">
                  {categorie.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchByCategory;
