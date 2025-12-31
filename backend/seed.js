import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "./models/restaurantModel.js";
import restaurantList from "./restaurantSeedData.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(async () => {
    console.log("MongoDB connected");

    // Delete old restaurants
    await Restaurant.deleteMany({});

    // Insert new restaurants
    await Restaurant.insertMany(restaurantList);

    console.log("Restaurants seeded successfully!");
    process.exit(0);
})
.catch((err) => {
    console.error(err);
    process.exit(1);
});
