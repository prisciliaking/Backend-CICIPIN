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
exports.RestaurantCategoryService = void 0;
const restaurantcategories_service_1 = require("../validations/restaurantcategories-service");
const restaurantcategories_model_response_1 = require("../models/restaurantcategories-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class RestaurantCategoryService {
    static getAllRestaurantCategories(restaurantCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllRestaurantCategories = yield database_1.prismaClient.restaurantCategories.findMany({
                where: {
                    id: restaurantCategories.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getRestaurantCategoryById(restaurantCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            const getRestaurantCategoryById = yield database_1.prismaClient.restaurantCategories.findUnique({
                where: {
                    id: restaurantCategories.id,
                },
            });
            return "getRestaurantCategoryById";
        });
    }
    static createRestaurantCategory(requestRestaurantCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(restaurantcategories_service_1.restaurantcategoriesValidation.CREATE, requestRestaurantCategory);
            // add the restaurant category to the database
            const createRestaurantCategory = yield database_1.prismaClient.restaurantCategories.create({
                data: {
                    categoryName: validateRequest.categoryName,
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateRestaurantCategory(UpdateRestaurantCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(restaurantcategories_service_1.restaurantcategoriesValidation.UPDATE, UpdateRestaurantCategory);
            // Update the restaurant category in the database
            const updatedRestaurantCategory = yield database_1.prismaClient.restaurantCategories.update({
                where: {
                    id: UpdateRestaurantCategory.id,
                },
                data: {
                    categoryName: validateRequest.categoryName,
                },
            });
            return (0, restaurantcategories_model_response_1.toRestaurantCategoryResponse)(updatedRestaurantCategory);
        });
    }
    static deleteRestaurantCategory(deleteRestaurantCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteRestaurantCategoryById = yield database_1.prismaClient.restaurantCategories.delete({
                where: {
                    id: deleteRestaurantCategory.id,
                },
            });
            return "Delete Restaurant Category";
        });
    }
}
exports.RestaurantCategoryService = RestaurantCategoryService;
