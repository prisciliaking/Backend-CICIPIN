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
exports.RestaurantCategoryController = void 0;
const auth_restaurantcategories_service_1 = require("../services/auth-restaurantcategories-service");
class RestaurantCategoryController {
    static getAllRestaurantCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategories = yield auth_restaurantcategories_service_1.RestaurantCategoryService.getAllRestaurantCategories(req.body);
            res.status(200).json(restaurantCategories);
        });
    }
    static getRestaurantCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategories = yield auth_restaurantcategories_service_1.RestaurantCategoryService.getRestaurantCategoryById(req.body);
            res.status(200).json(restaurantCategories);
        });
    }
    static createRestaurantCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategories = yield auth_restaurantcategories_service_1.RestaurantCategoryService.createRestaurantCategory(req.body);
            res.status(201).json(restaurantCategories);
        });
    }
    static updateRestaurantCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategories = yield auth_restaurantcategories_service_1.RestaurantCategoryService.updateRestaurantCategory(req.body);
            res.status(200).json(restaurantCategories);
        });
    }
    static deleteRestaurantCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantCategories = yield auth_restaurantcategories_service_1.RestaurantCategoryService.deleteRestaurantCategory(req.body);
            res.status(200).json(restaurantCategories);
        });
    }
}
exports.RestaurantCategoryController = RestaurantCategoryController;
