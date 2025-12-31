import { API_BASE_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/restaurants`);
            const data = await response.json();
            setListOfRestaurants(data);
            setFilteredRestaurant(data);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-button" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link 
                    key={restaurant._id}
                    to={"/restaurants/" + restaurant._id}><RestaurantCard 
                        restaurantData={restaurant} 
                    /></Link>
                ))}     
            </div>
        </div>
    );
};

export default Body;
