"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users-controllers");
const restaurants_controllers_1 = require("../controllers/restaurants-controllers");
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
