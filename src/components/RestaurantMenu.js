import { API_BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/restaurants/${resId}`);
      const data = await response.json();
      setRestaurantInfo(data);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  if (!restaurantInfo) return <Shimmer />;

  const { name, cuisines, avgRating, deliveryTime, costForTwo, menu } = restaurantInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>⭐ {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
      <h4>Cost for Two: ₹{costForTwo}</h4>

      <h2>Menu</h2>
      {menu && menu.length > 0 ? (
        menu.map((item, index) => (
          <div key={index} className="menu-item">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>₹{item.price}</p>
          
          <button onClick={() => addToCart(item)}>
      Add to Cart
    </button>

          </div>
        ))
      ) : (
        <p>Menu coming soon...</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
