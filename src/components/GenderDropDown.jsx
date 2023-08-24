import { useState } from 'react'
const GenderDropDowm = ({setGender,gender}) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectGender = (gender) => {
        setGender(gender);
        setIsOpen(false);
      };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        <>
            <div className="relative inline-block text-left mt-2">
                <div>
                    <button
                        type="button"
                        className="flex flex-row items-center px-2 justify-between  w-48 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={toggleMenu}
                    >
                        {gender ? gender : ' select gender '}
                        <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 15 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute  md:right-0 z-10 mt-1 w-48  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" >
                        <div className="py-1" role="none">
                            <a href='/#' className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectGender('Male')}>Male</a>
                            <a href='/#' className="text-gray-700 block px-4 py-1 text-xs cursor-pointer" role="menuitem" tabIndex="-1" onClick={() => selectGender('Female')}>Female</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default GenderDropDowm;