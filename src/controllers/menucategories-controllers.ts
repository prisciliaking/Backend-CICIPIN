import { Request, Response } from "express";
import { MenuCategoryService } from "../services/auth-menucategories-service";
import { createMenuCategory, responseMenuCategory, requestMenuCategory, updateMenuCategory, deleteMenuCategory } from "../models/menucategories-model-response";

export class MenuCategoriesController {
    static async getAllMenuCategories(req: Request, res: Response) {
        const menuCategories = await MenuCategoryService.getAllMenuCategories(req.body);
        res.status(200).json(menuCategories);
    }

    static async getMenuCategoryById(req: Request, res: Response) {
        const menuCategories = await MenuCategoryService.getMenuCategoryById(req.body);
        res.status(200).json(menuCategories);
    }

    static async createMenuCategory(req: Request, res: Response) {
        const menuCategories = await MenuCategoryService.createMenuCategory(req.body);
        res.status(201).json(menuCategories);
    }

    static async updateMenuCategory(req: Request, res: Response) {
        const menuCategories = await MenuCategoryService.updateMenuCategory(req.body);
        res.status(200).json(menuCategories);
    }

    static async deleteMenuCategory(req: Request, res: Response) {
        const menuCategories = await MenuCategoryService.deleteMenuCategory(req.body);
        res.status(200).json(menuCategories);
    }

}