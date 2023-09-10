const Discount = () => {
  return (
    <>
      <div className="container mx-auto pb-24 pt-8">
        <div className="flex flex-col justify-center bg-gradient-to-br h-[500px] bg-blue  text-white text-center py-10 px-20 rounded-lg shadow-md relative">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              GET 20% FLAT OFF ON ALL RIDES WITHIN THE CITY
              <br />
              USING HDFC CREDIT CARD
            </h3>
            <div className="flex justify-center items-center space-x-2 my-6">
              <span
                id="cpnCode"
                className="border-dashed border text-white px-4 py-2 rounded-l"
              >
                STEALDEAL20
              </span>
              <span
                id="cpnBtn"
                className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
              >
                Copy Code
              </span>
            </div>
            <p className="text-sm">Valid Till: 20Dec, 2023</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
          <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
        </div>
      </div>
    </>
  );
};
export default Discount;
