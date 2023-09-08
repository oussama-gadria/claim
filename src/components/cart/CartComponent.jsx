import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ITEMS_CART } from "../../graphqlFiles/query";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const navigate=useNavigate();
  const [cartItem, setCartItem] = useState([]);
  const cartId = localStorage.getItem("CartId");
  const { data } = useQuery(GET_ITEMS_CART, { variables: { cartId } });
  useEffect(() => {
    if (data) {
      setCartItem(data.cart.items);
    }
  }, [data]);

  return (
    <>
      <body className="bg-gray-100">
        <div className="flex justify-center container mx-auto my-12">
          <div className="w-[800px] shadow-md ">
            <div className=" bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Products</h1>
                <h2 className="font-semibold text-2xl">
                  {cartItem.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cartItem.map((item) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {item.product.name}
                      </span>
                      <a
                        href="/#"
                        className="font-extrabold text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    {item.quantity}
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.prices.price.value}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.prices.price.value * item.quantity}
                  </span>
                </div>
              ))}
              <button className="bg-blue font-semibold py-3 text-sm text-white uppercase w-full" onClick={()=>{navigate(`/ShippingAdresse/${localStorage.getItem("CartId")}`)}}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default CartComponent;
