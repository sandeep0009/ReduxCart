import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../featureSlices/cartSlices";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 flex flex-col justify-between">
            <div>
              <img src={item.thumbnail} alt={item.title} className="w-full h-auto mb-2" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">Price: ${item.price}</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
