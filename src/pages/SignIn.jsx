import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const validation = {
        email: { required: true },
        password: { required: true }
    }
    const signInCustomer = () => {
        console.log('signIn here soon')
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(signInCustomer)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" {...register('email', validation.email)} type="email" autoComplete="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {errors?.email?.type === 'required' &&
                                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                                    <p>Email is required !</p>
                                </div>
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="Password" {...register('password', validation.password)} type="Password" autoComplete="Password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {errors?.password?.type === 'required' &&
                                <div className="border mt-1  border-red-400 rounded bg-red-100 px-4 py-1 text-xs text-red-700">
                                    <p>Password is required !</p>
                                </div>
                            }
                        </div>
                        <Link to='/signUp'>
                            <a href="/#" className="text-xs text-blue-700">create a new account ?</a>
                        </Link>
                        <div>
                            <input type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignIn;