"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsController = void 0;
const auth_restaurant_service_1 = require("../services/auth-restaurant-service");
class RestaurantsController {
    static getAllRestaurants(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield auth_restaurant_service_1.RestaurantService.getAllRestaurants(req.body);
            res.status(200).json(restaurants);
        });
    }
    static getRestaurantById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield auth_restaurant_service_1.RestaurantService.getRestaurantById(req.body);
            res.status(200).json(restaurants);
        });
    }
    static createRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const restaurant = yield auth_restaurant_service_1.RestaurantService.createRestaurant(req.body);
                res.status(201).json({ message: "Restaurant created successfully", data: restaurant });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Failed to create restaurant", error });
            }
        });
    }
    static updateRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield auth_restaurant_service_1.RestaurantService.updateRestaurant(req.body);
            res.status(200).json(restaurants);
        });
    }
    static deleteRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield auth_restaurant_service_1.RestaurantService.deleteRestaurant(req.body);
            res.status(200).json(restaurants);
        });
    }
}
exports.RestaurantsController = RestaurantsController;
