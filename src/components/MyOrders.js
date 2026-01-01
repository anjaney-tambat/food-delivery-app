import { API_BASE_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/orders/myorders`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <p>Please login to view your orders.</p>;
  if (orders.length === 0) return <p>No orders yet.</p>;

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div key={order._id} style={{border:"1px solid #ddd", padding:"10px", marginBottom:"10px"}}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Placed on:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
          <div>
            <h4>Items:</h4>
            {order.items.map((item, idx) => (
              <p key={idx}>{item.name} - ₹{item.price} x {item.quantity}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
