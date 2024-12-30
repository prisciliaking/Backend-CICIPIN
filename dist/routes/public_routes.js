"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users-controllers");
const restaurants_controllers_1 = require("../controllers/restaurants-controllers");
const menucategories_controllers_1 = require("../controllers/menucategories-controllers");
const restaurantcategories_controllers_1 = require("../controllers/restaurantcategories-controllers");
const reviews_controllers_1 = require("../controllers/reviews-controllers");
exports.publicRouter = (0, express_1.Router)();
// Users
exports.publicRouter.get("/cicipin/users", users_controllers_1.UsersController.getAllUsers);
exports.publicRouter.get("/cicipin/users/:id", users_controllers_1.UsersController.getUserById);
exports.publicRouter.post("/cicipin/users", users_controllers_1.UsersController.createUser);
exports.publicRouter.put("/cicipin/users/:id", users_controllers_1.UsersController.updateUser);
exports.publicRouter.delete("/cicipin/users/:id", users_controllers_1.UsersController.deleteUser);
exports.publicRouter.get("/cicipin/users/usersRestaurants/:id", users_controllers_1.UsersController.getUserRestaurants);
// Restaurants
exports.publicRouter.get("/cicipin/restaurants", restaurants_controllers_1.RestaurantsController.getAllRestaurants);
exports.publicRouter.get("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.getRestaurantById);
exports.publicRouter.post("/cicipin/restaurants", restaurants_controllers_1.RestaurantsController.createRestaurant);
exports.publicRouter.put("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.updateRestaurant);
exports.publicRouter.delete("/cicipin/restaurants/:id", restaurants_controllers_1.RestaurantsController.deleteRestaurant);
// Menu Categories
exports.publicRouter.get("/cicipin/menuCategories", menucategories_controllers_1.MenuCategoriesController.getAllMenuCategories);
exports.publicRouter.get("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.getMenuCategoryById);
exports.publicRouter.post("/cicipin/menuCategories", menucategories_controllers_1.MenuCategoriesController.createMenuCategory);
exports.publicRouter.put("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.updateMenuCategory);
exports.publicRouter.delete("/cicipin/menuCategories/:id", menucategories_controllers_1.MenuCategoriesController.deleteMenuCategory);
// Restaurant Categories
exports.publicRouter.get("/cicipin/restaurantCategories", restaurantcategories_controllers_1.RestaurantCategoryController.getAllRestaurantCategories);
exports.publicRouter.get("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.getRestaurantCategoryById);
exports.publicRouter.post("/cicipin/restaurantCategories", restaurantcategories_controllers_1.RestaurantCategoryController.createRestaurantCategory);
exports.publicRouter.put("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.updateRestaurantCategory);
exports.publicRouter.delete("/cicipin/restaurantCategories/:id", restaurantcategories_controllers_1.RestaurantCategoryController.deleteRestaurantCategory);
// Reviews
exports.publicRouter.get("/cicipin/reviews", reviews_controllers_1.ReviewsController.getAllReviews);
exports.publicRouter.get("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.getReviewById);
exports.publicRouter.post("/cicipin/reviews", reviews_controllers_1.ReviewsController.createReview);
exports.publicRouter.put("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.updateReview);
exports.publicRouter.delete("/cicipin/reviews/:id", reviews_controllers_1.ReviewsController.deleteReview);
