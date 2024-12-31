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
exports.MenuCategoriesController = void 0;
const auth_menucategories_service_1 = require("../services/auth-menucategories-service");
class MenuCategoriesController {
    static getAllMenuCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuCategories = yield auth_menucategories_service_1.MenuCategoryService.getAllMenuCategories(req.body);
            res.status(200).json(menuCategories);
        });
    }
    static getMenuCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuCategories = yield auth_menucategories_service_1.MenuCategoryService.getMenuCategoryById(req.body);
            res.status(200).json(menuCategories);
        });
    }
    static createMenuCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuCategories = yield auth_menucategories_service_1.MenuCategoryService.createMenuCategory(req.body);
            res.status(201).json(menuCategories);
        });
    }
    static updateMenuCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuCategories = yield auth_menucategories_service_1.MenuCategoryService.updateMenuCategory(req.body);
            res.status(200).json(menuCategories);
        });
    }
    static deleteMenuCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuCategories = yield auth_menucategories_service_1.MenuCategoryService.deleteMenuCategory(req.body);
            res.status(200).json(menuCategories);
        });
    }
}
exports.MenuCategoriesController = MenuCategoriesController;
