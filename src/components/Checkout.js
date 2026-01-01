import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    const res = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        items: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: 1
        })),
        totalPrice
      })
    });

    if (res.ok) {
  alert("Order placed successfully");
  clearCart();
  navigate("/myorders");
}
  };

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Total: ₹{totalPrice}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
