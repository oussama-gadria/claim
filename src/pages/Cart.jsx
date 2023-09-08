import CartComponent from "../components/cart/CartComponent";

const Cart=()=>{
    return ( 
        <> 
        <div className="bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">
            Shopping cart
          </div>
        </div>
      </div>
        <CartComponent/>
        </>
    )
}
export default Cart;