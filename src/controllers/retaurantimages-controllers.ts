import { Request, Response } from "express";
import { RestaurantImageService } from "../services/auth-restaurantimages-service";

export class RestaurantImageController{
    static async getAllRestaurantImages(req: Request, res: Response){
        const restaurantImages = await RestaurantImageService.getAllRestaurantImages(req.body);
        res.status(200).json(restaurantImages);
    }

    static async getRestaurantImageById(req: Request, res: Response){
        const restaurantImages = await RestaurantImageService.getRestaurantImageById(req.body);
        res.status(200).json(restaurantImages);
    }   

    static async createRestaurantImage(req: Request, res: Response) {
        const restaurantImages = await RestaurantImageService.createRestaurantImage(req.body);
        res.status(201).json(restaurantImages);
    }

    static async updateRestaurantImage(req: Request, res: Response) {
        const restaurantImages = await RestaurantImageService.updateRestaurantImage(req.body);
        res.status(200).json(restaurantImages);
    }   

    static async deleteRestaurantImage(req: Request, res: Response) {
        const restaurantImages = await RestaurantImageService.deleteRestaurantImage(req.body);
        res.status(200).json(restaurantImages);
    }
}