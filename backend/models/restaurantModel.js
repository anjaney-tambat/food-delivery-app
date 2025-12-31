import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cloudinaryImageId: String,
  cuisines: [String],
  avgRating: Number,
  deliveryTime: Number,
  costForTwo: Number,

  menu: [
    {
      name: String,
      price: Number,
      description: String,
    }
  ],

  sla: {
    deliveryTime: Number,
    lastMileTravel: Number,
    slaString: String,
    lastMileTravelString: String
  },
  createdAt: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;