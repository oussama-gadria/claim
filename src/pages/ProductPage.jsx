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
    <>
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
      <div className="md:h-screen container mx-auto mt-16 ">
        <div className="flex flex-row bg-white rounded-lg ">
          <img
            className="rounded-lg mr-24 lg:w-[800px] lg:h-[600px] "
            src="https://www.01net.com/app/uploads/2023/05/PXL_20230523_125601362.jpg"
            alt="plant"
          />
          <div className="flex flex-col ml-8">
            <div>
              <h5 className="my-8  text-4xl  font-extrabold border-b border-solid border-subtle border-gray pb-4 ">
                {product.name}
              </h5>
            </div>
            <div className="flex flex-col md:flex-row ">
              <div>
                <p className="mb-3 font-extrabold text-2xl pb-5">
                  {product.price_range === undefined
                    ? 0
                    : product.price_range.minimum_price.final_price.value}{" "}
                  {product.price_range === undefined
                    ? 0
                    : product.price_range.minimum_price.final_price.currency}
                </p>
                <p className="mb-3 font-extrabold text-2xl  pb-5">
                  SKU : {product.sku}
                </p>
                <p className="mb-3 font-extrabold text-2xl  pb-5">
                  Quantity :{" "}
                  {product.only_x_left_in_stock
                    ? product.only_x_left_in_stock
                    : 0}
                </p>
                <p className="mb-3 font-extrabold text-2xl pb-6 ">
                  Url key : {product.url_key}
                </p>
                <div className="border-t border-gray pt-12  ">
                  <QuantityButton
                    setQuantity={setQuantity}
                    quantity={quantity}
                  />
                </div>
                <button
                  className="bg-blue mt-12  w-[250px] text-lg  text-white font-bold py-2  px-4 rounded-full"
                  onClick={() => addToCart(data.products.items[0], quantity)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
