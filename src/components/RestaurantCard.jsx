import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime,costForTwo, sla} = restaurantData;

    return (
        <div className="restaurant-card" style={{backgroundColor: "silver"}}>
            <img
                className="restaurant-logo"
                alt={restaurantData.name}
                src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Delivery Time: {deliveryTime} minutes</h4>
            <h4>Cost for Two: ₹{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;