const QuantityButton = ({ quantityMax,quantity,setQuantity }) => {
  const addQuantity = () => {
      setQuantity(quantity + 1);
  };
  const minusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="bg-white flex items-center w-[100px]  border-blue border rounded-md">
      <button
        type="button"
        className="w-10 h-10  text-blue font-extrabold  transition hover:opacity-75"
        onClick={minusQuantity}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        className="w-[20px] border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        className="w-10 h-10 text-blue font-extrabold transition hover:opacity-75"
        onClick={addQuantity}
      >
        +
      </button>
    </div>
  );
};
export default QuantityButton;
