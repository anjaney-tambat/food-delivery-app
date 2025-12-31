import express from "express"
import { addRestaurant, getRestaurants } from "../controllers/restaurantController.js";
import Restaurant from "../models/restaurantModel.js";
const router = express.Router();

// Get all restaurants
router.get("/", getRestaurants);

// Add a restaurant
router.post("/", addRestaurant);

router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;