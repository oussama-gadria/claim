const GlassSearchSvg = () => {
    return (
      <>
        <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
          <svg
            className="w-3 h-3 text-darkGray dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </>
    );
  };
  export default GlassSearchSvg;
  