import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  CREATE_EMPTY_CART_MUTATION,
  GENERATE_CUSTOMER_TOKEN,
} from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

const SignIn = ({ handleChangeToken }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInFailed, setSignInFailed] = useState(false);
  const [signInErrMessage, setSignInErrMessage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [createTokenCustomer] = useMutation(GENERATE_CUSTOMER_TOKEN);
  const [createEmptyCart] = useMutation(CREATE_EMPTY_CART_MUTATION);
  const validation = {
    email: { required: true },
    password: { required: true },
  };
  const signInCustomer = () => {
    createTokenCustomer({ variables: { email, password } })
      .then((response) => {
        try {
          createEmptyCart().then((response) => {
            localStorage.setItem("CartId", response.data.createEmptyCart);
          });
        } catch (error) {
          console.log(error);
        }
        handleChangeToken(response.data.generateCustomerToken.token);
        navigate("/");
      })
      .catch((err) => {
        setSignInErrMessage(err.message);
        setSignInFailed(true);
        setTimeout(() => {
          setSignInFailed(false);
        }, 2000);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(signInCustomer)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-2xl font-extrabold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", validation.email)}
                  type="email"
                  autoComplete="email"
                  className=" w-full font-bold rounded-md border-0 text-xl py-3 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {errors?.email?.type === "required" && (
                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-md text-red-700">
                  <p>Email is required !</p>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-2xl font-extrabold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="Password"
                  {...register("password", validation.password)}
                  type="Password"
                  autoComplete="Password"
                  className=" w-full font-bold rounded-md border-0 text-xl py-3 pl-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {errors?.password?.type === "required" && (
                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-md text-red-700">
                  <p>Password is required !</p>
                </div>
              )}
              {signInFailed && (
                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-md text-red-700">
                  <p>{signInErrMessage}</p>
                </div>
              )}
            </div>
            <Link to="/signUp">
              <button className="text-md font-extrabold text-blue">
                create a new account ?
              </button>
            </Link>
            <div>
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue px-3 py-3 text-2xl font-semibold leading-6 text-white shadow-sm cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
