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
exports.MenuCategoryService = void 0;
const menucategories_service_1 = require("../validations/menucategories-service");
const menucategories_model_response_1 = require("../models/menucategories-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class MenuCategoryService {
    static getAllMenuCategories(menuCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllMenuCategories = yield database_1.prismaClient.menuCategories.findMany({
                where: {
                    id: menuCategories.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getMenuCategoryById(menuCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            const getMenuCategoryById = yield database_1.prismaClient.menuCategories.findUnique({
                where: {
                    id: menuCategories.id,
                },
            });
            return "getMenuCategoryById";
        });
    }
    static createMenuCategory(requestMenuCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(menucategories_service_1.menucategoriesValidation.CREATE, requestMenuCategory);
            // add the menu category to the database
            const createMenuCategory = yield database_1.prismaClient.menuCategories.create({
                data: {
                    categoryName: validateRequest.categoryName,
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateMenuCategory(UpdateMenuCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(menucategories_service_1.menucategoriesValidation.UPDATE, UpdateMenuCategory);
            // Update the menu category in the database
            const updatedMenuCategory = yield database_1.prismaClient.menuCategories.update({
                where: {
                    id: UpdateMenuCategory.id,
                },
                data: {
                    categoryName: validateRequest.categoryName,
                },
            });
            return (0, menucategories_model_response_1.toMenuCategoryResponse)(updatedMenuCategory);
        });
    }
    static deleteMenuCategory(deleteMenuCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteMenuCategoryById = yield database_1.prismaClient.menuCategories.delete({
                where: {
                    id: deleteMenuCategory.id,
                },
            });
            return "Delete Menu Category";
        });
    }
}
exports.MenuCategoryService = MenuCategoryService;
