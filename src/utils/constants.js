export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://food-delivery-app-gfw8.onrender.com/" 
    : "http://localhost:5000";

export const CDN_URL = 
        `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/`;

export const LOGO_URL = "https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"

export const MENU_API = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.7889556&lng=73.67690689999999&restaurantId="