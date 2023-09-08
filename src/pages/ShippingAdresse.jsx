import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ADD_SHIPPING_ADDRESS,
} from "../graphql/mutations";

const ShippingAdresse = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [company, setCompany] = useState();
  const [streetAdress, setStreetAdress] = useState();
  const [postCode, setPostCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [addShippingAdresse] = useMutation(ADD_SHIPPING_ADDRESS);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validation = {
    email: { required: true },
    firstname: { required: true },
    lastname: { required: true },
    company: { required: true },
    streetAdress: { required: true },
    postCode: { required: true },
    phoneNumber: { required: true },
  };

  const saveCustomer = () => {
    const cartId = localStorage.getItem("CartId");
    const ShippingAdresse = [
      {
        address: {
          firstname: firstname,
          lastname: lastname,
          company: company,
          street: streetAdress,
          postcode: postCode,
          telephone: phoneNumber,
          country_code: "GB", 
          city: "London"
        },
      },
    ];
    const input = {
      cart_id: cartId,
      shipping_addresses: ShippingAdresse,
    };
    addShippingAdresse({ variables: { input } })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
            Shipping Address
          </div>
        </div>
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(saveCustomer)} className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-lg font-bold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  {...register("firstname", validation.firstname)}
                  type="text"
                  autoComplete="firstname"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {errors?.firstname?.type === "required" && (
                  <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                    <p>First name is required !</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-lg font-bold leading-6  "
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  {...register("lastname", validation.lastname)}
                  type="text"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setLastname(e.target.value)}
                />
                {errors?.lastname?.type && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Last name is required !</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="compamy"
                className="block text-lg font-bold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  id="company"
                  {...register("company", validation.company)}
                  type="text"
                  autoComplete="company"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setCompany(e.target.value)}
                />
                {errors?.company?.type === "required" && (
                  <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                    <p>Company name is required !</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="streetAdress"
                className="block text-lg font-bold leading-6 text-gray-900"
              >
                Street Adress
              </label>
              <div className="mt-2">
                <input
                  id="streetAdress"
                  {...register("streetAdress", validation.streetAdress)}
                  type="text"
                  autoComplete="streetAdress"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setStreetAdress(e.target.value)}
                />
                {errors?.streetAdress?.type === "required" && (
                  <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                    <p>streetAdress name is required !</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="postCode"
                className="block text-lg font-bold leading-6 text-gray-900"
              >
                Zip / Post Code
              </label>
              <div className="mt-2">
                <input
                  id="postCode"
                  {...register("postCode", validation.postCode)}
                  type="text"
                  autoComplete="postCode"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setPostCode(e.target.value)}
                />
                {errors?.postCode?.type === "required" && (
                  <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                    <p>postCode name is required !</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-bold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  {...register("phoneNumber", validation.phoneNumber)}
                  type="text"
                  autoComplete="phoneNumber"
                  className=" w-full font-bold rounded-md border-0 text-xl py-1 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors?.phoneNumber?.type === "required" && (
                  <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                    <p>phoneNumber name is required !</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue px-3 py-2 text-2xl font-semibold leading-6 text-white shadow-sm cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ShippingAdresse;
