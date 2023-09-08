import {  useNavigate } from "react-router-dom";

const ProductCard = ({ product,categoryId,categoryName }) => {
  const navigate =useNavigate()
  const getProductData=(product) => { 
    navigate(`/category/${categoryName}/${categoryId}/${product.sku}`)
  }
  return (
    <div className="pr-8">
      <div className="flex flex-col  bg-white rounded-md overflow-hidden shadow-lg mb-14">
        <div className="aspect-ratio-container">
          <img
            alt="..."
            src="https://www.01net.com/app/uploads/2023/05/PXL_20230523_125601362.jpg"
          />
        </div>
        <div className="pl-4 py-4">
          <div className="flex items-center mb-2 pt-2">
            <div className="text-black  font-bold text-lg mr-2">Name :</div>
            <p className="text-blue font-bold text-lg ">{product.name}</p>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-black  font-bold text-lg mr-2">Sku :</div>
            <p className="text-blue font-bold text-lg ">{product.sku}</p>
          </div>
          <div className="flex items-center mb-1">
            <div className="text-black  font-bold text-lg mr-2">
              Stock Status :
            </div>
            <p className="text-blue  font-bold text-lg ">
              {product.stock_status}
            </p>
          </div>
        </div>
        <div className="p-4">
          <button className="bg-blue w-full  text-white font-bold py-1 px-4 rounded-full" onClick={()=>getProductData(product)}>
            Product Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
