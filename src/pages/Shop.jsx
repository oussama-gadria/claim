import { useParams } from "react-router-dom";
import BackButton from "../components/buttons/BackButton";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../graphqlFiles/query";

const Shop = () => {
  const { categoryName,uid } = useParams();
  const {data}=useQuery(GET_PRODUCTS_BY_CATEGORY,{variables:{uid}});
  console.log(data)
  return (
    <>
      <div className=" bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
            {categoryName}|{" "}
          </div>
          <div className="font-bold text-black ml-4 text-[16px] mt-12">
            Find the perfect phone for you
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <BackButton goTo="/" />
      </div>
    </>
  );
};
export default Shop;
