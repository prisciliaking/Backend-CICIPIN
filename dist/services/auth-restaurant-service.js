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
exports.RestaurantService = void 0;
const restaurants_service_1 = require("../validations/restaurants-service");
const restaurants_model_response_1 = require("../models/restaurants-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class RestaurantService {
    static getAllRestaurants(restaurants) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllRestaurants = yield database_1.prismaClient.restaurants.findMany({
                where: {
                    id: restaurants.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getRestaurantById(restaurants) {
        return __awaiter(this, void 0, void 0, function* () {
            const getRestaurantById = yield database_1.prismaClient.restaurants.findUnique({
                where: {
                    id: restaurants.id,
                },
            });
            return "getRestaurantById";
        });
    }
    static createRestaurant(requestRestaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(restaurants_service_1.restaurantsValidation.REGISTER, requestRestaurant);
            // add the restaurant to the database
            const createRestaurant = yield database_1.prismaClient.restaurants.create({
                data: {
                    name: validateRequest.name,
                    address: validateRequest.address,
                    longtitude: validateRequest.longtitude,
                    latitude: validateRequest.latitude,
                    description: validateRequest.description,
                    UsersID: validateRequest.UsersID,
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateRestaurant(UpdateRestaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(restaurants_service_1.restaurantsValidation.UPDATE, UpdateRestaurant);
            // Update the restaurant in the database
            const updatedRestaurant = yield database_1.prismaClient.restaurants.update({
                where: {
                    id: UpdateRestaurant.id,
                    UsersID: UpdateRestaurant.userID, // Corrected from userID to UsersID
                },
                data: {
                    name: validateRequest.name,
                    address: validateRequest.address,
                    longtitude: validateRequest.longtitude,
                    latitude: validateRequest.latitude,
                    description: validateRequest.description,
                },
            });
            // Assuming `Users` is fetched elsewhere and available here
            const user = yield database_1.prismaClient.users.findUnique({
                where: { id: UpdateRestaurant.userID },
            });
            if (!user) {
                throw new Error("User not found"); // Handle cases where the user doesn't exist
            }
            return (0, restaurants_model_response_1.toUpdateRestaurantResponse)(updatedRestaurant); // Pass the user as the second argument
        });
    }
    static deleteRestaurant(deleteRestaurant) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteRestaurantById = yield database_1.prismaClient.restaurants.delete({
                where: {
                    id: deleteRestaurant.id,
                },
            });
            return "Delete Restaurant";
        });
    }
}
exports.RestaurantService = RestaurantService;
