import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DATA_BY_SKU } from "../graphql/query";
import QuantityButton from "../components/buttons/QuantityButton";

const ProductPage = ({ handleAddProductToCartList }) => {
  const { productSku } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { data } = useQuery(GET_PRODUCT_DATA_BY_SKU, {
    variables: { productSku },
  });

  const addToCart = (product, quantity) => {
    handleAddProductToCartList(product, quantity);
  };

  useEffect(() => {
    if (data) setProduct(data.products.items[0]);
  }, [data]);

  return (
    <div>
       <div className="bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
          {product.name} | 
          </div>
          <div className="font-bold text-black ml-4 text-[16px] mt-12">
            Find the perfect phone for you
          </div>
        </div>
      </div>
      <div className="md:h-screen container mx-auto">
        <div className=" pt-8 ">
          <div className="bg-gray rounded-r-lg flex mt-8 ">
            <img
              className="rounded-lg  lg:pr-10 lg:w-[700px] lg:h-[400px] "
              src="https://www.01net.com/app/uploads/2023/05/PXL_20230523_125601362.jpg"
              alt="plant"
            />
            <div className="  flex flex-col ">
              <h5 className="my-8 md:pl-10 text-4xl font-extrabold  ">
                Name : {product.name}
              </h5>
              <div className="flex flex-col md:flex-row md:pl-10 ">
                <div>
                  <p className="mb-3 font-extrabold text-xl  ">
                    Price :{" "}
                    {product.price_range === undefined
                      ? 0
                      : product.price_range.minimum_price.final_price
                          .value}{" "}
                    {product.price_range === undefined
                      ? 0
                      : product.price_range.minimum_price.final_price.currency}
                  </p>
                  <p className="mb-3 font-extrabold text-xl  ">
                    SKU : {product.sku}
                  </p>
                  <p className="mb-3 font-extrabold text-xl  ">
                    Quantity :{" "}
                    {product.only_x_left_in_stock
                      ? product.only_x_left_in_stock
                      : 0}
                  </p>
                  <p className="mb-3 font-extrabold text-xl  ">
                    Url key : {product.url_key}
                  </p>
                  <div>
                    <QuantityButton
                      setQuantity={setQuantity}
                      quantity={quantity}
                    />
                  </div>
                  <button
                    className="bg-blue mt-8  w-[250px] text-lg  text-white font-bold py-2 px-4 rounded-md"
                    onClick={() => addToCart(data.products.items[0], quantity)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
