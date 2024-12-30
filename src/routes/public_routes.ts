// publicc-router.ts
import express from "express";
import { Router } from 'express';

import { UsersController } from "../controllers/users-controllers";
import { RestaurantsController } from "../controllers/restaurants-controllers";

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
