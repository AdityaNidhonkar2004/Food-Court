import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="cart  p-5 text-center text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-md p-1.5 hover:bg-green-700 "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1>Cart is Empty!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
