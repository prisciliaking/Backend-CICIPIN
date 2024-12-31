// publicc-router.ts
import express from "express";
import { Router } from 'express';

import { UsersController } from "../controllers/users-controllers";
import { RestaurantsController } from "../controllers/restaurants-controllers";
import { MenuCategoriesController } from "../controllers/menucategories-controllers";
import { RestaurantCategoryController } from "../controllers/restaurantcategories-controllers";
import { ReviewsController } from "../controllers/reviews-controllers";

export const publicRouter = Router();

// Users
publicRouter.get("/cicipin/users", UsersController.getAllUsers);
publicRouter.get("/cicipin/users/:id", UsersController.getUserById);
publicRouter.post("/cicipin/users", UsersController.createUser);
publicRouter.put("/cicipin/users/:id", UsersController.updateUser);
publicRouter.delete("/cicipin/users/:id", UsersController.deleteUser);
publicRouter.get("/cicipin/users/usersRestaurants/:id", UsersController.getUserRestaurants);

// Restaurants
publicRouter.get("/cicipin/restaurants", RestaurantsController.getAllRestaurants);
publicRouter.get("/cicipin/restaurants/:id", RestaurantsController.getRestaurantById);
publicRouter.post("/cicipin/restaurants", RestaurantsController.createRestaurant);
publicRouter.put("/cicipin/restaurants/:id", RestaurantsController.updateRestaurant);
publicRouter.delete("/cicipin/restaurants/:id", RestaurantsController.deleteRestaurant);

// Menu Categories
publicRouter.get("/cicipin/menuCategories", MenuCategoriesController.getAllMenuCategories);
publicRouter.get("/cicipin/menuCategories/:id", MenuCategoriesController.getMenuCategoryById);
publicRouter.post("/cicipin/menuCategories", MenuCategoriesController.createMenuCategory);
publicRouter.put("/cicipin/menuCategories/:id", MenuCategoriesController.updateMenuCategory);
publicRouter.delete("/cicipin/menuCategories/:id", MenuCategoriesController.deleteMenuCategory);

// Restaurant Categories
publicRouter.get("/cicipin/restaurantCategories", RestaurantCategoryController.getAllRestaurantCategories);
publicRouter.get("/cicipin/restaurantCategories/:id", RestaurantCategoryController.getRestaurantCategoryById);
publicRouter.post("/cicipin/restaurantCategories", RestaurantCategoryController.createRestaurantCategory);
publicRouter.put("/cicipin/restaurantCategories/:id", RestaurantCategoryController.updateRestaurantCategory);
publicRouter.delete("/cicipin/restaurantCategories/:id", RestaurantCategoryController.deleteRestaurantCategory);

// Reviews
publicRouter.get("/cicipin/reviews", ReviewsController.getAllReviews);
publicRouter.get("/cicipin/reviews/:id", ReviewsController.getReviewById);
publicRouter.post("/cicipin/reviews", ReviewsController.createReview);
publicRouter.put("/cicipin/reviews/:id", ReviewsController.updateReview);   
publicRouter.delete("/cicipin/reviews/:id", ReviewsController.deleteReview);

