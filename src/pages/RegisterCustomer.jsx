import { useState } from "react";
import { CREATE_CUSTOMER_MUTATION } from "../graphqlFiles/mutations";
import { useMutation } from "@apollo/client";
import {
    Datepicker,
    Input,
    initTE,
  } from "tw-elements";
initTE({ Datepicker, Input });
const RegisterCustomer = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [createCustomer] = useMutation(CREATE_CUSTOMER_MUTATION);
    const handleSubmit = () => {
        const input = {
            firstname: firstname,
            lastname: lastname,
            middlename: middlename,
            email: email,
            dateOfBirth: dateOfBirth,
            gender: gender,
            password: password,
        }
        console.log(input)
        createCustomer({ variables: { input } })
            .then((response) => {
                console.log(response.data.createCustomerV2.customer);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="Firstname" className="block text-sm font-medium leading-6 text-gray-900">Firstname</label>
                            <div className="mt-2">
                                <input id="Firstname" name="Firstname" type="Firstname" autoComplete="Firstname" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Lastname" className="block text-sm font-medium leading-6 text-gray-900">Lastname</label>
                            <div className="mt-2">
                                <input id="Lastname" name="Lastname" type="Lastname" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setLastname(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Middlename" className="block text-sm font-medium leading-6 text-gray-900">Middlename</label>
                            <div className="mt-2">
                                <input id="Middlename" name="Middlename" type="Middlename" autoComplete="Middlename" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setMiddlename(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div
                            class="relative mb-3"
                            data-te-datepicker-init
                            data-te-input-wrapper-init>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date" />
                            <label
                                for="floatingInput"
                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Select a date</label
                            >
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="Password" name="Password" type="Password" autoComplete="Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit} >Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default RegisterCustomer;