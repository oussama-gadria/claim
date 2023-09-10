import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ITEMS_CART } from "../graphql/query";
import { useNavigate } from "react-router-dom";
import BillingAdresseComponent from "../components/common/BillingAdressComponent";
import ShippingAdresseComponent from "../components/common/ShippingAdresseComponent";
import { PLACE_ORDER } from "../graphql/mutations";

const ReviewAndPayment = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();
  const [cartItem, setCartItem] = useState([]);
  const cartId = localStorage.getItem("CartId");
  const { data } = useQuery(GET_ITEMS_CART, { variables: { cartId } });
  const [placeOrder] = useMutation(PLACE_ORDER);

  const checkOut = () => {
    const input = {
      cart_id: cartId,
    };
    placeOrder({ variables: { input } }).then((response) => {
      console.log(response.data);
    });
  };
  useEffect(() => {
    if (data) {
      setCartItem(data.cart.items);
    }
  }, [data]);

  useEffect(() => {
    const totalPrice = cartItem.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.prices.price.value;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItem]);
  return (
    <>
      <div className="bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
            Review And Payment
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-between">
        <div className="bg-gray-100">
          <div className="flex justify-center container mx-auto my-14">
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div id="summary" className="w-[600px]  my-24">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItem.length}
              </span>
              <span className="font-semibold text-sm">${totalPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice + 10}</span>
              </div>
              <button
                className="bg-blue font-semibold  py-3 text-sm text-white uppercase w-full"
                onClick={checkOut}
              >
                Checkout
              </button>
            </div>
          </div>
          <BillingAdresseComponent />
          <ShippingAdresseComponent />
        </div>
      </div>
    </>
  );
};
export default ReviewAndPayment;
