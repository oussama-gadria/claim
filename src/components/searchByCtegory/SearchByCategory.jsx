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
      <div className="container mx-auto">
        <div className="flex flex-row items-center pt-9 pb-4">
          <p className="font-extrabold text-blue text-[40px]">Search By</p>
          <p className="pl-1 font-extrabold  text-[40px]">Category</p>
        </div>
        <div className="flex flex-row  justify-around">
          {categories.map((categorie) => (
            <Link to={`/category/${categorie.name}/${categorie.uid}`}>
              <div className="flex  flex-col basis-1/6 items-center bg-white rounded overflow-hidden shadow-lg mr-7 mb-14">
                <div className="aspect-ratio-container">
                  <img
                    alt="Bonsai"
                    src="https://s40123.pcdn.co/wp-content/uploads/2023/01/shutterstock_1940751661.jpg.optimal.jpg"
                  />
                </div>
                <a href="/#" className="text-sm mt-6 mb-2 font-bold">
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
export default SearchByCategory;
