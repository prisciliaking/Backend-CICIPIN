import { Request, Response } from "express";
import { RestaurantCategoryService } from "../services/auth-restaurantcategories-service";
import { createRestaurantCategory, responseRestaurantCategory, requestRestaurantCategory, updateRestaurantCategory, deleteRestaurantCategory } from "../models/restaurantcategories-model-response";

export class RestaurantCategoryController{
    static async getAllRestaurantCategories(req: Request, res: Response){
        const restaurantCategories = await RestaurantCategoryService.getAllRestaurantCategories(req.body);
        res.status(200).json(restaurantCategories);
    }

    static async getRestaurantCategoryById(req: Request, res: Response){
        const restaurantCategories = await RestaurantCategoryService.getRestaurantCategoryById(req.body);
        res.status(200).json(restaurantCategories);
    }   

    static async createRestaurantCategory(req: Request, res: Response) {
        const restaurantCategories = await RestaurantCategoryService.createRestaurantCategory(req.body);
        res.status(201).json(restaurantCategories);
    }

    static async updateRestaurantCategory(req: Request, res: Response) {
        const restaurantCategories = await RestaurantCategoryService.updateRestaurantCategory(req.body);
        res.status(200).json(restaurantCategories);
    }   

    static async deleteRestaurantCategory(req: Request, res: Response) {
        const restaurantCategories = await RestaurantCategoryService.deleteRestaurantCategory(req.body);
        res.status(200).json(restaurantCategories);
    }


}