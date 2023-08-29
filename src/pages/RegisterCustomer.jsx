import { useState } from "react";
import { CREATE_CUSTOMER_MUTATION } from "../graphqlFiles/mutations";
import { useMutation } from "@apollo/client";
import GenderDropDowm from "../components/GenderDropDown";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterCustomer = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [emailExist, setEmailExist] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState();
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [createCustomer] = useMutation(CREATE_CUSTOMER_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validation = {
    firstname: { required: true },
    lastname: { required: true },
    email: { required: true, pattern: /[a-z0-9._%]+@[a-z0-9]+\.[a-z]{2,}$/i },
    password: {
      required: true,
      minLength: 8,
      pattern:
        /^^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*\d){1,})(?=(.*[-+_!@#$%^&*.,?]){1,}).+$/i,
    },
    confirmPassword: { required: true, minLength: 8 },
  };
  const input = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    gender: gender,
    is_subscribed: false,
    password: password,
  };
  const saveCustomer = () => {
    if (confirmPassword !== password && password && confirmPassword) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
      createCustomer({ variables: { input } })
        .then((response) => {
          console.log(response.data.createCustomerV2.customer);
        })
        .catch((error) => {
          setErrorMessage(error);
          setEmailExist(true);
          setTimeout(() => {
            setEmailExist(false);
          }, 2000);
          console.error(error);
        });
    }
  };
  return (
    <>
      <div className="flex  min-h-full flex-col justify-center  px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
          <Link to="/signIn">
            <button className="text-xs text-blue-700">
              Already have an account ?
            </button>
          </Link>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(saveCustomer)} className="space-y-6">
            <div className="flex flex-row justify-between">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    {...register("firstname", validation.firstname)}
                    type="text"
                    autoComplete="firstname"
                    className=" w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    {...register("lastname", validation.lastname)}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", validation.email)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email?.type === "required" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Email is required !</p>
                    </div>
                  </div>
                )}
                {emailExist && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>{errorMessage.message}</p>
                    </div>
                  </div>
                )}
                {errors?.email?.type === "pattern" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>This is not valid email</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <GenderDropDowm gender={gender} setGender={setGender} />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", validation.password)}
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors?.password?.type === "required" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Password is required !</p>
                    </div>
                  </div>
                )}
                {errors?.password?.type === "pattern" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>
                        Minimum of different classes of characters in password
                        is 3. Classes of characters: Lower Case, Upper Case,
                        Digits, Special Characters.
                      </p>
                    </div>
                  </div>
                )}
                {errors?.password?.type === "minLength" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Password should have at least 8 character !</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirme Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", validation.confirmPassword)}
                  type="password"
                  autoComplete="Password"
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                {errors?.confirmPassword?.type === "required" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Confirm Password is required !</p>
                    </div>
                  </div>
                )}
                {errors?.confirmPassword?.type === "minLength" && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Password should have at least 8 character !</p>
                    </div>
                  </div>
                )}
                {isPasswordConfirm && (
                  <div role="alert">
                    <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                      <p>Password and Confirm Password doesn't match</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 pl-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterCustomer;
