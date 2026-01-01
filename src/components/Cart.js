import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


  const handleCheckout = () => {
    if (!user) {
      alert("Please login to proceed to checkout");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go order food!</Link></p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item" style={{borderBottom:"1px solid #ddd", padding:"8px 0"}}>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                style={{ padding:"4px 8px", background:"#ff4d4f", color:"#fff", border:"none", borderRadius:"4px", cursor:"pointer" }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button
            onClick={handleCheckout}
            style={{ padding:"6px 12px", background:"#ff4d4f", color:"#fff", border:"none", borderRadius:"4px", cursor:"pointer" }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
