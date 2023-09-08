import { useParams } from "react-router-dom";
import BackButton from "../components/buttons/BackButton";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../graphql/query";
import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";

const Shop = () => {
  const { categoryName, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { categoryId },
  });
  useEffect(() => {
    if (data) setProducts(data.products.items);
  }, [data]);
  return (
    <div>
      <div className="bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
            {categoryName}|
          </div>
          <div className="font-bold text-black ml-4 text-[16px] mt-12">
            Find the perfect phone for you
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <BackButton goTo="/" />
      </div>
      <div className="container mx-auto pl-7 grid grid-cols-4 mt-11">
        {products.map((product) => (
          <ProductCard
            product={product}
            categoryName={categoryName}
            categoryId={categoryId}
          />
        ))}
      </div>
    </div>
  );
};
export default Shop;
