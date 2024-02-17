import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Assignment Cart</div>
        <div className="links">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-200">
                Cart: {cartItems.length>0?cartItems.length:0}
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-200">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
